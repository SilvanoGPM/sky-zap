import firebase from 'firebase/app';
import 'firebase/firebase-auth';
import 'firebase/firebase-firestore';

import firebaseConfig, { USERS, CHATS } from 'config/firebase';

type User = {
  id: string;
  name: string;
  avatar: string;
};

type Timestamp = {
  seconds: number;
};

type Chat = {
  chatId: string | undefined;
  lastMessageDate: Timestamp;
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default {
  async googlePopup(): Promise<firebase.auth.UserCredential> {
    const provider = new firebase.auth.GoogleAuthProvider();
    const result = firebase.auth().signInWithPopup(provider);
    return result;
  },

  async addUser({ id, name, avatar }: User): Promise<void> {
    db.collection(USERS).doc(id).set({ name, avatar }, { merge: true });
  },

  async getContactList(id: string): Promise<User[]> {
    const list: User[] = [];

    const results = await db.collection(USERS).get();
    results.forEach((result) => {
      const data = result.data();
      if (result.id !== id) {
        list.push({
          id: result.id,
          name: data.name,
          avatar: data.avatar,
        });
      }
    });

    return list;
  },

  async addNewChat(user: User, otherUser: User): Promise<void> {
    const newChat = await db.collection(CHATS).add({
      messages: [],
      users: [user.id, otherUser.id],
    });

    db.collection(USERS)
      .doc(user.id)
      .update({
        chats: firebase.firestore.FieldValue.arrayUnion({
          chatId: newChat.id,
          title: otherUser.name,
          image: otherUser.avatar,
          with: otherUser.id,
        }),
      });

    db.collection(USERS)
      .doc(otherUser.id)
      .update({
        chats: firebase.firestore.FieldValue.arrayUnion({
          chatId: newChat.id,
          title: user.name,
          image: user.avatar,
          with: user.id,
        }),
      });
  },

  // eslint-disable-next-line
  onChatList(id: string, setChatList: any): () => void {
    return db
      .collection(USERS)
      .doc(id)
      .onSnapshot((doc) => {
        if (doc.exists) {
          const data = doc.data();
          if (data?.chats) {
            const chats = [...data.chats];

            chats.sort((a: Chat, b: Chat) => {
              if (
                a.lastMessageDate === undefined ||
                b.lastMessageDate === undefined
              ) {
                return -1;
              }

              return a.lastMessageDate.seconds < b.lastMessageDate.seconds
                ? 1
                : -1;
            });

            setChatList(chats);
          }
        }
      });
  },

  // eslint-disable-next-line
  onChatContent(chatId: string, setChat: any, setUsers: any) {
    return db
      .collection(CHATS)
      .doc(chatId)
      .onSnapshot((doc) => {
        if (doc.exists) {
          const data = doc.data();
          setChat(data?.messages);
          setUsers(data?.users);
        }
      });
  },

  sendMessage: (
    chatData: Chat,
    userId: string,
    body: string,
    users: string[]
  ): void => {
    const now = new Date();

    db.collection(CHATS)
      .doc(chatData.chatId)
      .update({
        messages: firebase.firestore.FieldValue.arrayUnion({
          author: userId,
          body,
          date: now,
        }),
      });

    users.forEach(async (user) => {
      const info = await db.collection(USERS).doc(user).get();
      const data = info.data();

      if (data?.chats) {
        const chats = [...data.chats];

        chats.forEach((chat) => {
          if (chatData.chatId === chat.chatId) {
            // eslint-disable-next-line no-param-reassign
            chat.lastMessage = body;
            // eslint-disable-next-line no-param-reassign
            chat.lastMessageDate = now;
          }
        });

        db.collection(USERS).doc(user).update({
          chats,
        });
      }
    });
  },
};

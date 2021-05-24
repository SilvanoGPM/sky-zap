import firebase from 'firebase/app';
import 'firebase/firebase-auth';
import 'firebase/firebase-firestore';

import firebaseConfig from 'config/firebase';

type User = {
  id: string;
  name: string;
  avatar: string;
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default {
  googlePopup: async (): Promise<firebase.auth.UserCredential> => {
    const provider = new firebase.auth.GoogleAuthProvider();
    const result = firebase.auth().signInWithPopup(provider);
    return result;
  },

  addUser: async ({ id, name, avatar }: User): Promise<void> => {
    db.collection('users').doc(id).set({ name, avatar });
  },
};

import styled from 'styled-components';

const Avatar = styled.img.attrs({
  alt: 'Avatar',
})`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  cursor: pointer;
  border-radius: 50%;
`;

export default Avatar;

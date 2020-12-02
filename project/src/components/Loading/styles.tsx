import styled, { keyframes } from 'styled-components';

const LoadingAnimation = keyframes`
  0% { transform: rotate(0deg) }
  100% { transform: rotate(360deg) }
`;

export const Loading = styled.div`
  width: 32px;
  height: 32px;
  background: deeppink;
  animation-name: ${LoadingAnimation};
  animation-duration: 2.5s;
  animation-iteration-count: infinite;
`

export const Container = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

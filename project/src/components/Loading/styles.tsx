import styled, {keyframes} from 'styled-components';

interface LoadingProps {
    position?: "absolute" | "relative";
    minWidth?: number;
    minHeight?: number;
    shadow?: boolean;
}

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

export const Container = styled.div<LoadingProps>`
  position: ${props => props.position ?? 'absolute'};
  left: 0;
  top: 0;
  width: ${props => (props.position ?? 'absolute') === "absolute" ? "100vw" : "100%"};
  height: ${props => (props.position ?? 'absolute') === "absolute" ? "100vh" : "100%"};
  
  min-width: ${props => (props.minWidth ?? 'inherit') === "inherit" ? "inherit" : `${props.minWidth}px`};
  min-height: ${props => (props.minHeight ?? 'inherit') === "inherit" ? "inherit" : `${props.minHeight}px`};
  
  display: flex;
  
  align-items: center;
  justify-content: center;
  flex-direction: column;
  
  ${props => {
      return (props.shadow ?? false) ? 
      `
        box-sizing: content-box;
        box-shadow: 0 0 1px black;
      ` : '';   
  }}
`

import styled from 'styled-components';
import {Colors} from "../../theme";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 8px;
  align-items: center;
  height: 500px;
  max-width: 256px;
  background: linear-gradient(180deg, ${Colors["3"]}8F, ${Colors["3"]}8F, transparent);
`;

export const ComicCover = styled.img`
  width: 256px;
  z-index: 1;
  background: ${Colors["3"]}8F;
`;

export const TextObject = styled.p`
  & {
    padding: 4px;
  }
  
  font-weight: bold;
  
  word-break: break-word;
  text-align: center;
`;

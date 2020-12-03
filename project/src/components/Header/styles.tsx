import styled from 'styled-components';
import { Colors } from "../../theme";

export const Container = styled.header`
  display: flex;
  background: ${Colors["2"]};
  min-height: 48px;
  color: ${Colors["4"]};
  justify-content: center;
  align-items: center;
  font-weight: 700;
  font-size: 16pt;
`;

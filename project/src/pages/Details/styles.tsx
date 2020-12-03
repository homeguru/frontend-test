import styled from 'styled-components'
import {Colors} from "../../theme";
import breakpoints from "../../breakpoints";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  flex-grow: 1;
  
  @media (min-width: ${breakpoints.tablets[1]}px) {
    flex-direction: row;
    justify-content: center;
  }
`;

export const Cover = styled.img`
`;

export const TitleText = styled.h2`
  
`;

export const TextObject = styled.p<{
    textSize?: string
    weight?: number
}>`
  & {
    padding: 4px;
  }
  
  ${props => props.textSize ? `font-size: ${props.textSize}` : ''} 
  ${props => props.weight ? `font-weight: ${props.weight}` : ''} 
`;

export const DetailsContainer = styled.section`
  @media (min-width: ${breakpoints.tablets[1]}px) {
    margin-left: 25px;
  }
`;

export const ImageContainer = styled.section`
  @media (min-width: ${breakpoints.tablets[1]}px) {
    margin-right: 25px;
  }
`;

export const CreatorsContainer = styled.section`
  padding: 10px 0;

`;
export const CharactersContainer = styled.section``;

export const Separator = styled.hr`
  border: 0;
  background: ${Colors["2"]};
  height: 2px;
  width: 100%;
`;

export const ShareButton = styled.button`
  background: ${Colors["2"]};
  color: antiquewhite;
  border: 0;
  padding: 8px;
  border-radius: 0;
  width: 100%;
`

export const Button = styled.button`
  position: absolute;
  top: 7px;
  left: 10px;
  padding: 8px;
  background: ${Colors["2"]};
  color: antiquewhite;
  border: 0;
  border-radius: 0;
`;

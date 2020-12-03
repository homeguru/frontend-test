import styled from 'styled-components'

export interface ContainerProps {
    minWidth?: string;
    minHeight?: string;
}

export const Container = styled.div<ContainerProps>`
  ${props => props.minWidth ? `min-width: ${props.minWidth};`: ''};
  ${props => props.minHeight ? `min-height: ${props.minWidth};`: ''};
`

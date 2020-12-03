import * as React from 'react';
import { Container } from "./styles";

const Header: React.FC = ({children}) => {
    return <Container>
        {children}
    </Container>;
}

export default Header;

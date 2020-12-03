import * as React from 'react';
import { Container, ContentContainer } from './styles';
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const Layout: React.FC = ({ children }) => {
    return <Container>
        <Header>
            <p>
                Captain Marvel Comics
            </p>
        </Header>
        <ContentContainer>
            {children}
        </ContentContainer>
        <Footer />
    </Container>;
}

export default Layout;

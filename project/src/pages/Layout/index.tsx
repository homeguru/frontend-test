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
            <section>
                <h3>Data provided by Marvel. © 2020 <a target="_blank" href="http://marvel.com">MARVEL</a></h3>
            </section>
            {children}
        </ContentContainer>
        <Footer />
    </Container>;
}

export default Layout;

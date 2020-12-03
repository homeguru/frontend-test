import * as React from 'react';
import { Container } from './styles';
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const Layout: React.FC = ({ children }) => {
    return <Container>
        <Header />
        {children}
        <Footer />
    </Container>;
}

export default Layout;

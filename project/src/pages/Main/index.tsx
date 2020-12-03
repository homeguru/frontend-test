import * as React from 'react';
import {Character} from "../../interfaces/character";
import { Container } from './styles'
import Comic from "../../components/Comic";
import Layout from "../Layout";

interface MainProps {
    character: Character;
}

const Main: React.FC<MainProps> = ({character}) => {
    return <Layout>
        <Container>
            <Comic Id={1} Date={new Date()} Name={"Test"} Thumbnail={{
                extension: "jpeg",
                path: "https://via.placeholder.com/128x128"
            }} />
        </Container>
    </Layout>;
}

export default Main;

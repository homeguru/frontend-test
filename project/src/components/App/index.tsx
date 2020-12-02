import * as React from 'react';
import Container from "./styles";
import {getCharacter} from "../../services";
import {Character} from "../../interfaces/character";
import Loading from "../Loading";
import Main from "../../pages/Main";

const ContainerFC: React.FC = ({ children }) => {
    const [isLoading, setLoading] = React.useState(true);
    const [currentCharacter, setCurrentCharacter] = React.useState<Partial<Character>>();

    React.useEffect(() => {
        getCharacter("Captain Marvel (Carol Danvers)").then((res: any) => {
            setCurrentCharacter(res.data.results[0] as Character);
            setLoading(false);
        });
    }, []);

    return (
        <Container>
            {isLoading ?
                <Loading message="App is loading" /> :
                <Main character={currentCharacter as Character} />
            }
        </Container>
    );
}

export default ContainerFC;

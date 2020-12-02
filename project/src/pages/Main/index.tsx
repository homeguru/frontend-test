import * as React from 'react';
import {Character} from "../../interfaces/character";

interface MainProps {
    character: Character;
}

const Main: React.FC<MainProps> = ({character}) => {
    return <div>
        Selected Character: {character.name}
    </div>;
}

export default Main;

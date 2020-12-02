import * as React from 'react';
import { Loading, Container } from "./styles";

interface LoadingProps {
    message: string;
}

const LoadingFC: React.FC<LoadingProps> = ({ message }) => {
    return <Container>
        <Loading />
        <p>{message}</p>
    </Container>
}

export default LoadingFC;

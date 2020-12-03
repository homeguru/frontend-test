import * as React from 'react';
import { Loading, Container } from "./styles";

interface LoadingProps {
    message: string;
    color?: string;
    position?: "absolute" | "relative";
    minWidth?: number;
    minHeight?: number;
    shadow?: boolean;
}

const LoadingFC: React.FC<LoadingProps> =
    ({
         message,
         position,
         minHeight,
         minWidth,
         color,
         shadow
    }) => {
    return <Container position={position} minHeight={minHeight} minWidth={minWidth} color={color} shadow={shadow}>
        <Loading />
        <p>{message}</p>
    </Container>
}

export default LoadingFC;

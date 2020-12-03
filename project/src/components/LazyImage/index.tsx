import LazyComponent from "../LazyComponent";
import * as React from "react";
import Loading from "../Loading";
import {Container, ContainerProps} from "./styles";

interface LazyImageProps {
    imageFile: string;
    baseComponent?: JSX.Element;
    containerOpts?: ContainerProps;
}

const LazyImage = ({ imageFile, baseComponent, containerOpts, ...props }:
                       Readonly<LazyImageProps> &
                       React.ImgHTMLAttributes<HTMLImageElement>
) => {
    return <LazyComponent<React.ImgHTMLAttributes<HTMLImageElement>> fetch={(props) => {
        return new Promise(resolve => {
            const image = new Image();
            const imageProps = props as unknown as React.ImgHTMLAttributes<HTMLImageElement>;

            image.addEventListener('load', () => {
                resolve(<Container {...{
                    minWidth: "216px",
                    minHeight: "328px",
                    ...containerOpts
                }}>
                    {React.createElement(baseComponent?.type ?? 'img', imageProps)}
                </Container>);
            })

            image.addEventListener('error', () => {
                resolve(
                    <Loading
                        message="Unable to load image..."
                        position="relative"
                        minHeight={216}
                        minWidth={324}
                        shadow
                    />)
            });

            image.src = imageProps.src!;
        });
    }} loaderComponent={
        <Loading
            message="Image is loading"
            position="relative"
            minHeight={216}
            minWidth={384}
            shadow
        />
    } {...{
        src: imageFile,
        ...props
    }} />;
}

export default LazyImage;

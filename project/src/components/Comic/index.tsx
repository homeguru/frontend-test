import * as React from 'react';
import { Container } from './styles';
import Loading from '../Loading';
import { Thumbnail } from "../../interfaces/thumbnail";
import LazyComponent from "../LazyComponent";
import moment from "moment";

interface ComicProps {
    Id: number;
    Name: string;
    Thumbnail: Thumbnail;
    Date: Date;
}

const Comic: React.FC<Readonly<ComicProps>> = ({Id, Date, Name, Thumbnail}) => {
    return <Container>
        <LazyComponent<object> key={Id} fetch={() => {
            return new Promise(resolve => {
                setTimeout(() => {
                    resolve(<>
                        <LazyComponent<React.ImgHTMLAttributes<HTMLImageElement>> fetch={(props) => {
                            return new Promise(resolve => {
                                const image = new Image();
                                const imageProps = props as unknown as React.ImgHTMLAttributes<HTMLImageElement>;

                                image.addEventListener('load', () => {
                                    resolve(<img src={image.src} alt={imageProps.alt} {...imageProps} />)
                                })

                                image.addEventListener('error', () => {
                                    resolve(
                                        <Loading
                                            message="Unable to load image..."
                                            position="relative"
                                            minHeight={256}
                                            minWidth={256}
                                            shadow
                                        />)
                                });

                                image.src = imageProps.src!;
                            });
                        }} loaderComponent={
                            <Loading
                                message="Image is loading"
                                position="relative"
                                minHeight={256}
                                minWidth={256}
                                shadow
                            />
                        } {...{
                            width: "128",
                            src: "https://via.placeholder.com/2048x2048"
                        }} />
                        <p>Title: {Name}</p>
                        <p>Release Date: {moment(Date).format('d / M / y')}</p>
                    </>);
                }, 1250)
            });
        }} loaderComponent={<Loading message="Comic is loading" position="relative" />} />
    </Container>;
}

export default Comic;

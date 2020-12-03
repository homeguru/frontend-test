import * as React from 'react';
import Comic from "../../interfaces/comic";
import Layout from "../Layout";
import {
    Button,
    Container,
    Cover,
    TextObject,
    TitleText,
    DetailsContainer,
    ImageContainer,
    CreatorsContainer, CharactersContainer, Separator, ShareButton
} from "./styles";
import {GetImage} from "../../utils/marvel.image.parser";
import moment from "moment";
import LazyImage from "../../components/LazyImage";
import {useDispatch} from "react-redux";
import {setComic} from "../../redux/app";

export interface DetailsProps {
    Comic: Comic
}

const Details: React.FC<Readonly<DetailsProps>> = ({ Comic }) => {
    const image = GetImage(Comic.images[0], "portrait_incredible");
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(setComic(-1));
    }

    return <Layout>
        <Container>
            <Button onClick={handleClick}>{'<<'}</Button>

            <ImageContainer>
                <LazyImage imageFile={image} baseComponent={<Cover />} />
                <TitleText>{Comic.title}</TitleText>
                <TextObject textSize="8pt">Diamond Code: {Comic.diamondCode}</TextObject>
                <ShareButton>Share with your friends</ShareButton>
            </ImageContainer>

            <DetailsContainer>
                <TextObject>
                    <span>Printed price: </span>
                    <span>${Comic.prices.find(x => x.type.indexOf("print") !== -1)?.price ?? '0.00'}</span>
                </TextObject>
                <TextObject>This comic have {Comic.pageCount} pages</TextObject>
                <TextObject>Sales started @ {moment(Comic.dates[0].date).format('DD / MM / YYYY')}</TextObject>
                <TextObject>Last modification @ {moment(Comic.modified ?? new Date()).format('DD / MM / YYYY')}</TextObject>

                <CreatorsContainer>
                    <TextObject>Creators
                        <Separator />
                        {Comic
                            .creators
                            .items
                            .map(
                                (creator) => <TextObject textSize="12pt">{creator.name} @ {creator.role}</TextObject>)
                        }
                    </TextObject>
                </CreatorsContainer>

                <CharactersContainer>
                    <TextObject>Characters
                        <Separator />
                        {Comic
                            .characters
                            .items
                            .map(
                                (character) => <TextObject textSize="12pt">{character.name}</TextObject>)
                        }
                    </TextObject>
                </CharactersContainer>
            </DetailsContainer>
        </Container>
    </Layout>;
}

export default Details;

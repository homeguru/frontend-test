import * as React from 'react';
import {ComicCover, Container, TextObject} from './styles';
import { Thumbnail } from "../../interfaces/thumbnail";
import moment from "moment";
import {GetImage} from "../../utils/marvel.image.parser";
import { useDispatch } from 'react-redux';

import { setComic } from '../../redux/app';
import LazyImage from "../LazyImage";

interface ComicProps {
    Id: number;
    Name: string;
    Thumbnail: Thumbnail;
    Date: Date;
}

const Comic: React.FC<Readonly<ComicProps>> = ({Id, Date, Name, Thumbnail}) => {
    const imageFile = GetImage(Thumbnail, "portrait_incredible");
    const dispatch = useDispatch();
    const onClickHandler = () => {
        dispatch(setComic(Id));
    };

    return <Container key={Id} onClick={onClickHandler}>
        <LazyImage imageFile={imageFile} baseComponent={<ComicCover />} />
        <TextObject>{Name}</TextObject>
        <TextObject>Release Date: {moment(Date).format('DD / MM / YYYY')}</TextObject>
    </Container>;
}

export default Comic;

import * as React from 'react';
import Container from "./styles";
import {getCharacter} from "../services";
import Loading from "../components/Loading";
import Main from "../pages/Main";

import { useSelector, useDispatch } from 'react-redux';
import { RootState } from "../redux/root.reducer";

import { setCharacter } from '../redux/character';
import { setLoadingState, setComic } from '../redux/app';
import Details from "../pages/Details";
import {getComic} from "../services/get.comic";
import { addBatch } from '../redux/comics';

let runOnce: boolean = true;

const ContainerFC: React.FC = () => {
    const dispatch = useDispatch();
    const { comics, application } = useSelector((state: RootState) => state);
    const { IsLoading, SelectedComic } = application;
    const { Comics } = comics;

    React.useEffect(() => {
        const asyncFunc = async () => {
            const response = await getCharacter("Captain Marvel (Carol Danvers)");

            if (response) {
                dispatch(setCharacter(response.data.results[0]));
                dispatch(setLoadingState(false));

                if (runOnce) {
                    const comicId_param = new URLSearchParams(window.location.search).get('c');
                    if (comicId_param) {
                        const comicId = parseInt(comicId_param);
                        const comicData = await getComic(comicId);

                        if (comicData) {
                            if (comicData.data.count > 0) {
                                addBatch(comicData.data.results);
                                dispatch(setComic(comicId));
                            }
                        }
                    }
                    runOnce = false;
                }
            }
        }

        asyncFunc().then();
    }, [dispatch]);

    return (
        <Container>
            {IsLoading ?
                <Loading message="App is loading" /> :
                !SelectedComic || SelectedComic === -1 ? <Main /> :
                    Comics ?
                        (() => {
                            const comic = Comics.find(x => x.id === SelectedComic);
                            return comic ?
                                <Details Comic={comic} /> :
                                <Main />;
                        })() :
                        <Main />
            }
        </Container>
    );
}

export default ContainerFC;

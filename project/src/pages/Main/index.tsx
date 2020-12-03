import * as React from 'react';
import { Container } from './styles'
import Comic from "../../components/Comic";
import Layout from "../Layout";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../redux/root.reducer";
import {getComics} from "../../services";
import useInfiniteScroll from "react-infinite-scroll-hook";

import { addBatch, incrementOffset, setTotalComic, setFetching } from '../../redux/comics';

interface MainProps {}

const Main: React.FC<MainProps> = () => {
    const dispatch = useDispatch();
    const { character, comics } = useSelector((state: RootState) => state);
    const { Character } = character;
    const { Comics, HasMore, ApiIsFetching, ComicOffset } = comics;
    const [fetchMore, setFetchMore] = React.useState(0);

    const inifiniteRef = useInfiniteScroll<HTMLDivElement>({
        loading: ApiIsFetching ?? false,
        hasNextPage: HasMore ?? true,
        onLoadMore: () => {
            setFetchMore(fetchMore + 1);
        }
    });

    React.useEffect(() => {
        const asyncFunc = async () => {
            if (Character) {
                const result = await getComics(Character.id, ComicOffset);
                if (result) {
                    dispatch(setFetching(false));
                    dispatch(setTotalComic(result.data.total));
                    dispatch(incrementOffset(result.data.count + 1));
                    dispatch(addBatch(result.data.results));
                }
            }
        };

        dispatch(setFetching(true));
        asyncFunc().then();
    }, [Character, dispatch, fetchMore]);

    return <Layout>
        <Container ref={inifiniteRef}>
            {Comics?.map(comic => {
                return <Comic
                    key={comic.id}
                    Id={comic.id}
                    Name={comic.title}
                    Thumbnail={comic.images[0]}
                    Date={comic.dates[0].date} />;
            })}
        </Container>
    </Layout>;
}

export default Main;

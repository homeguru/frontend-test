import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Comic from "../../interfaces/comic";
import { differenceBy } from 'lodash'

const initialState: Partial<{
    Comics: Comic[];
    TotalComic: number;
    ComicOffset: number;
    HasMore: boolean;
    ApiIsFetching: boolean;
}> = {
    Comics: [],
    ComicOffset: 0,
    TotalComic: 0
};

const slice = createSlice({
    name: 'comics',
    initialState,
    reducers: {
        addComic(state, payload: PayloadAction<Comic>) {
            if (!state.Comics) state.Comics = [];

            state.Comics.push(...differenceBy([payload.payload], state.Comics, 'id'));
        },
        addBatch(state, payload: PayloadAction<Comic[]>) {
            if (!state.Comics) state.Comics = [];

            state.Comics.push(...differenceBy(payload.payload, state.Comics, 'id'));
        },
        incrementOffset(state, payload: PayloadAction<number>) {
            state.ComicOffset! += payload.payload;
            state.HasMore = state.ComicOffset! < state.TotalComic!;
        },
        setTotalComic(state, payload: PayloadAction<number>) {
            state.TotalComic = payload.payload;
        },
        setFetching(state, payload: PayloadAction<boolean>) {
            state.ApiIsFetching = payload.payload;
        }
    }
});

export const { addComic, addBatch, incrementOffset, setTotalComic, setFetching } = slice.actions;
export default slice.reducer;

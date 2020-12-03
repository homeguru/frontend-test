import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: Partial<{
    IsLoading: boolean;
    SelectedComic: number;
}> = {
    IsLoading: true,
    SelectedComic: -1
};

const slice = createSlice({
    name: 'application',
    initialState,
    reducers: {
        setLoadingState(state, action: PayloadAction<boolean>) {
            state.IsLoading = action.payload;
        },
        setComic(state, action: PayloadAction<number>) {
            state.SelectedComic = action.payload;
        }
    }
});

export const { setLoadingState, setComic } = slice.actions;
export default slice.reducer;

import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {Character} from "../../interfaces/character";

const initialState: Partial<{
    Character: Character
}> = {
    Character: {
        thumbnail: {
            extension: "jpg",
            path: "https://via.placeholder.com/128x128"
        },
        resourceURI: "",
        name: "",
        modified: new Date(),
        id: 0,
        description: ""
    }
};

const slice = createSlice({
    name: 'character',
    initialState,
    reducers: {
        setCharacter(state, action: PayloadAction<Character>) {
            state.Character = action.payload;
        }
    }
})

export const { setCharacter } = slice.actions;
export default slice.reducer;

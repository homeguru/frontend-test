import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {Character} from "../../interfaces/character";

const initialState: Partial<Character> = {};

const characterSlice = createSlice({
    name: 'character',
    initialState: initialState,
    reducers: {
        updateCharacter(state, action: PayloadAction<Character>) {
            state = action.payload;
        }
    }
})

export const { updateCharacter } = characterSlice.actions;
export default characterSlice.reducer;

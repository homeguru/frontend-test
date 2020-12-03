 import { combineReducers } from '@reduxjs/toolkit'
import characterReducer from './character';

const rootReducer = combineReducers ({
    character: characterReducer
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;

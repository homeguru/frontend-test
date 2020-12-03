import { combineReducers } from '@reduxjs/toolkit'
import characterReducer from './character';
import applicationReducer from './app';
import comicsReducer from './comics' ;

const rootReducer = combineReducers ({
    character: characterReducer,
    application: applicationReducer,
    comics: comicsReducer
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;

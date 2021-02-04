import { ON_MARVEL_CHAR_CHANGED, ON_MARVEL_CHARS_LOADED } from './types';
import { HttpGet } from "../../functions/httpRequest";

export const findHeroes = (searchString) => {
    return dispatch => {
        HttpGet('/v1/public/characters?nameStartsWith=' + searchString)
            .then(result => {
                if (result.status === 200) {
                    dispatch({
                        type: ON_MARVEL_CHARS_LOADED,
                        payload: result.data.data.results
                    });
                }
            })
            .catch(error => console.log(error));
    };
};

export const clearHeroes = () => {
    return {
        type: ON_MARVEL_CHARS_LOADED,
        payload: []
    };
};

export const findComics = (char) => {
    return dispatch => {
        if (char.length) {
            var characterId;
            if (typeof char === "string") {
                characterId = parseInt(char)
            } else {
                characterId = char[0].id;
            }
            HttpGet('/v1/public/characters/' + characterId + '/comics?hasDigitalIssue=true&limit=15')
                .then(result => {
                    if (result.status === 200 && result.data.data.results.length >= 1) {
                        dispatch({
                            type: ON_MARVEL_CHAR_CHANGED,
                            payload: result.data.data.results
                        });
                    }
                })
                .catch((error) => {
                    dispatch(console.log(error));
                });
        };
    }
};
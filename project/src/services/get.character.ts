import api from './base';
import ApiResponse from "../interfaces/api.response";
import Character from "../interfaces/character";

export const getCharacter = async (name: string, startWith: boolean = false)
    : Promise<ApiResponse<Character> | undefined> => {
    try {
        const response = await api.get('characters', {
            params: {
                [startWith ? "nameStartsWith" : "name"]: name
            }
        });

        return response.data;
    } catch (e) {
        return undefined;
    }
}

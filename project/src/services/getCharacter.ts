import api from './base';

export const getCharacter = async (name: string, startWith: boolean = false) => {
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

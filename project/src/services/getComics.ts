import api from './base';

export const getComics = async (name: string, startWith: boolean) => {
    try {
        const response = await api.get('comics', {
            params: {
                [startWith ? "nameStartsWith" : "name"]: name
            }
        });

        return response.data;
    } catch (e) {
        return undefined;
    }
}

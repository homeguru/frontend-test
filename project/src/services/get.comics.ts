import api from './base';
import ApiResponse from "../interfaces/api.response";
import Comic from "../interfaces/comic";

export const getComics = async (id: number, offset?: number):
    Promise<ApiResponse<Comic> | undefined> => {
    try {

        const response = await api.get(`comics/${id}`, {
            params: {
                format: "comic",
                formatType: "comic",
                orderBy: "-onsaleDate",
                offset: offset ?? 0,
                limit: 25
            }
        });

        return response.data;
    } catch (e) {
        return undefined;
    }
}

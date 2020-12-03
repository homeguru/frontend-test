import api from './base';
import ApiResponse from "../interfaces/api.response";
import Comic from "../interfaces/comic";

export const getComic = async (id: number):
    Promise<ApiResponse<Comic> | undefined> => {
    try {
        const {data} = await api.get(`comic/${id}`);
        return data;
    } catch (e) {
        return undefined;
    }
}

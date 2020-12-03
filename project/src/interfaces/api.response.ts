import ApiResponseData from "./apiResponseData";

export interface ApiResponse<T> {
    code: number;
    status: string;
    copyright: string;
    attributionText: string;
    attributionHTML: string;
    etag: string;
    data: ApiResponseData<T>;
}

export default ApiResponse;

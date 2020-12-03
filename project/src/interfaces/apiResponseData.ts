export interface ApiResponseData<T> {
    offset: number;
    limit: number;
    total: number;
    count: number;
    results: T[];
}

export default ApiResponseData;

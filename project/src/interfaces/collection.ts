export interface Collection<T> {
    available: number;
    collectionURI: string;
    returned: number;
    items: T[];
}

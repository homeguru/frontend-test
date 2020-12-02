import {CollectionItem} from "./collection.item";

export interface Collection {
    available: number;
    collectionURI: string;
    returned: number;
    items: CollectionItem[];
}

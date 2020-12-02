import {marvelUrl} from "./marvel-url";
import {Thumbnail} from "./thumbnail";
import {Collection} from "./collection";

export interface Character {
    comics: Collection;
    events: Collection;
    series: Collection;
    stories: Collection;
    urls: marvelUrl[];

    description: string;
    id: number;
    modified: Date;
    name: string;
    resourceURI: string;
    thumbnail: Thumbnail;
}

 import {MarvelUrl} from "./marvel.url";
import {Thumbnail} from "./thumbnail";
import {Collection} from "./collection";

export interface Character {
    comics?: Collection<unknown>;
    events?: Collection<unknown>;
    series?: Collection<unknown>;
    stories?: Collection<unknown>;
    urls?: MarvelUrl[];

    description: string;
    id: number;
    modified: Date;
    name: string;
    resourceURI: string;
    thumbnail: Thumbnail;
}

export default Character;

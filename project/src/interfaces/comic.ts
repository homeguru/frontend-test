import {TextObject} from "./text.object";
import {MarvelUrl} from "./marvel.url";
import {Collection} from "./collection";
import {Thumbnail} from "./thumbnail";
import {ComicDate} from "./comic.date";
import CharacterSummary from "./character.summary";
import {ComicPrice} from "./comicPrice";
import {CreatorSummary} from "./creatorSummary";

export interface Comic {
    id: number;
    digitalId: number;
    title: string;
    issueNumber: number;
    variantDescription?: string;
    description: string;
    modified?: Date;
    isbn?: string;
    upc?: string;
    diamondCode?: string;
    ean?: string;
    issn?: string;
    format: string;
    pageCount: number;
    textObjects: TextObject[];
    resourceURI?: string;
    urls: MarvelUrl[];
    series: Collection<unknown>;
    variants: Collection<unknown>;
    collections: Collection<unknown>;
    collectedIssues: unknown[];
    dates: ComicDate[];
    prices: ComicPrice[];
    images: Thumbnail[];
    creators: Collection<CreatorSummary>;
    characters: Collection<CharacterSummary>;
    stories: unknown[];
    events: unknown[];
}

export default Comic;

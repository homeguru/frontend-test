import { Character } from './character';
import {Collection} from "./collection";

const templateUri = "https://example.com";

const collectionTemplate: Collection = {
    available: 100,
    collectionURI: templateUri,
    items: [],
    returned: 10
}

const character: Character = {
    comics: collectionTemplate,
    events: collectionTemplate,
    series: collectionTemplate,
    stories: collectionTemplate,
    description: "No description...",
    id: 1,
    modified: new Date(),
    name: "JEST",
    resourceURI: templateUri,
    thumbnail: {
        extension: "jpg",
        path: "https://via.placeholder.com/128x128"
    },
    urls: []
};

test('character must have name', () => {
    expect(character.name === "JEST").toBeTruthy();
})

test('character must have thumbnail data', () => {
    expect(character.thumbnail).toBeTruthy();
})

test('character must have id', () => {
    expect(character.id).toBeTruthy();
})

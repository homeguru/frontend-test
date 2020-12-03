import React from 'react';
import { render, screen } from '@testing-library/react';
import Comp from './index';
import {Collection} from "../../interfaces/collection";
import {Character} from "../../interfaces/character";

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

const component = <Comp character={character} />;

test('renders Comics', () => {
    render(component);
    expect(screen.getByText("Comics"));
});

test('renders renders header', () => {
    render(component);
    expect(screen.getByText("Frontend Test"));
});

test('renders renders footer', () => {
    render(component);
    expect(screen.getByText("Frontend Test created by darknesxk @ github"));
});

test('renders marvel required text', () => {
    render(component);
    expect(screen.getByText("Marvel @ 2020"));
});

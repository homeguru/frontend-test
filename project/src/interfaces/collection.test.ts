import { Collection } from "./collection";

const testItem = {
    name: "",
    resourceURI: ""
};

test('collection available cant be less than returned', () => {
    const collection: Collection<unknown> = {
        returned: 5,
        items: [],
        available: 10,
        collectionURI: ""
    };

    expect(collection.available >= collection.returned).toBeTruthy();
})

test('collection items cant be bigger than returned value', () => {
    const collection: Collection<unknown> = {
        returned: 5,
        items: [testItem, testItem, testItem, testItem, testItem],
        available: 10,
        collectionURI: ""
    }

    expect(collection.available >= collection.returned).toBeTruthy();
    expect(collection.items.length == collection.returned).toBeTruthy();
})

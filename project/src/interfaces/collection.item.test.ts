import { CollectionItem } from './collection.item';

test('item must have name', () => {
    const item: CollectionItem = {
        name: "test",
        resourceURI: "test",
        type: ""
    }

    expect(item.name !== '').toBeTruthy()
})

test('[contains] item can have or not an type', () => {
    const item: CollectionItem = {
        name: "test",
        resourceURI: "test",
        type: ""
    }

    expect(item.type !== undefined).toBeTruthy()
})

test('[undefined] item can have or not an type', () => {
    const item: CollectionItem = {
        name: "test",
        resourceURI: "test"
    }

    expect(item.type === undefined).toBeTruthy()
})

import { marvelUrl } from "./marvel-url";

test('value must be a valid url', () => {
    const url: marvelUrl = {
        type: "event",
        url: "https://example.com"
    }

    let valid = false;
    try {
        const UrlObject = new URL(url.url);
        valid = true;
    } catch {
        valid = false;
    }

    expect(valid).toBeTruthy();
})


test('value must be a valid url', () => {
    const url: marvelUrl = {
        type: "event",
        url: "https://example.com"
    }

    expect(url.type === "event").toBeTruthy();
})

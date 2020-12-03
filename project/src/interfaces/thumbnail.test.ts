import { Thumbnail } from "./thumbnail";

test('except to have extension', () => {
    const obj: Thumbnail = {
        path: "",
        extension: "jpg"
    }

    expect(obj.extension !== "").toBeTruthy()
})

test('except path to be url', () => {
    const obj: Thumbnail = {
        path: "https://example.com",
        extension: "jpg"
    }

    let valid = false;
    try {
        const UrlObject = new URL(obj.path);
        valid = true;
    } catch {
        valid = false;
    }

    expect(valid).toBeTruthy();
});

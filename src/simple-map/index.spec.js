import { SimpleMap } from "./index";

describe("test SimpleMap", () => {
    let map;
    beforeEach(() => {
        // Clears the database and adds some testing data.
        // Jest will wait for this promise to resolve before running tests.
        map = new SimpleMap();
    });

    test("map is instance of Map", () => {
        expect(map).toBeInstanceOf(SimpleMap)
    });

    test("can check of previously added key: should return true", () => {
        const key = "property";
        const value = "value";
        map.set(key, value);
        expect(map.has(key)).toBeTruthy();
    });

    test("added pair key, falsyValue should check correctly", () => {
        const pairs = [
            {
                key: "property1",
                value: null,
            },
            {
                key: "property2",
                value: false,
            },
            {
                key: "property3",
                value: 0,
            },
            {
                key: "property4",
                value: "",
            },
            {
                key: "property5",
                value: undefined,
            },
        ];
        pairs.forEach(pair => {
            map.set(pair.key, pair.value);
        });
        pairs.forEach(pair => {
            expect(map.has(pair.key)).toBeTruthy();
        });
    });

    test("can check of previously no added key: should return false", () => {
        const key = "property";
        const keyNonexistent = "property1";
        const value = "value";
        map.set(key, value);
        expect(map.has(keyNonexistent)).toBeFalsy();
    });

    test("can get value of previously added key", () => {
        const key = "property";
        const value = "value";
        map.set(key, value);
        expect(map.get(key)).toBe(value);
    });

    test("when get previously no added key, should return undefined", () => {
        const key = "property";
        const keyNonexistent = "property1";
        const value = "value";
        map.set(key, value);
        expect(map.get(keyNonexistent)).toBeUndefined();
    });

    test("can delete of previously added key", () => {
        const key = "property";
        const value = "value";
        map.set(key, value);
        expect(map.delete(key)).toBeTruthy();
        expect(map.get(key)).toBeUndefined();
    });

    test("can delete of previously no added key: should return false", () => {
        const key = "property";
        expect(map.delete(key)).toBeFalsy();
        expect(map.get(key)).toBeUndefined();
    });

    test("can clear map", () => {
        const key = "property";
        const value = "value";
        map.set(key, value);
        map.clear(key);
        expect(map.get(key)).toBeUndefined();
    });

    test("can return keys as object of iterator with keys as values", () => {
        const key = "property";
        const keyNonexistent = "property1";
        const value = "value";
        map.set(key, value);
        const keys = [...map.keys()];
        expect(keys.includes(key)).toBeTruthy();
        expect(keys.includes(keyNonexistent)).toBeFalsy();
    });

    test("can be iterated using a for..of loop", () => {
        const key = "property";
        const keyNonexistent = "property1";
        const value = "value";
        map.set(key, value);
        expect([...map]).toContainEqual({key, value});
        expect([...map]).not.toContainEqual({key: keyNonexistent, value});
    });
});

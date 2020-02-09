/**
 * analog Map
 */
export class SimpleMap {
    constructor() {
        this._items = {};
    }

    /**
     * set pair key, value in map
     * @param {String} key
     * @param {*} value
     */
    set(key, value) {
        this._items[key] = value;
    }

    /**
     * check is has key in map
     * @param {String} key
     */
    has(key) {
        return key in this._items;
    }

    /**
     * get value by key
     * @param {String} key
     */
    get(key) {
        return this._items[key];
    }

    /**
     * delete key
     * @param {string} key
     */
    delete(key) {
        return this._items[key] && delete this._items[key];
    }

    /**
     * delete all keys
     */
    clear() {
        this._items = {};
        return true;
    };

    /**
     * return all keys as iterator
     */
    keys() {
        const keys = Object.keys(this._items);
        let index = 0;
        const result = {
            [Symbol.iterator]() {
                return result;
            },
            next() {
                if (index > keys.length - 1) {
                    return { done: true };
                } else {
                    return  {
                        value: keys[index++],
                        done: false,
                    }
                }
            },
        };

        return result;
    }

    /**
     * return all values as iterator
     */
    *[Symbol.iterator]() {
        for (const key of this.keys()) {
            yield ({
                key,
                value: this.get(key),
            });
        }
    }
}

export default SimpleMap;

import NodeCache from 'node-cache';
import { nanoid } from 'nanoid';

const cache = new NodeCache({ stdTTL: 300 });

export const aicache = {
    set: (val: string): string => {
        const key = nanoid(12); // short, fast, collision-resistant
        cache.set(key, val);
        return key;
    },
    get: (key: string): string => {
        return cache.get(key) || '';
    },
    list: (): string => {
        return JSON.stringify(cache.keys);
    }
};



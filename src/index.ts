import NodeCache from 'node-cache';
import { nanoid } from 'nanoid';

export const cache = new NodeCache({ stdTTL: 300 });

export function set(val: string): string {
    const key = nanoid(12); // short, fast, collision-resistant
    cache.set(key, val);
    return key;
}

export function get(key: string): string {
    return cache.get(key) || '';
}

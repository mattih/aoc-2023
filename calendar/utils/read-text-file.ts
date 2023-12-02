import { readFileSync } from 'node:fs';
/**
 * Takes text file path as an input and returns the content as an array of strings.
 */
export function readTextFile(filePath: string): string[] {
    return readFileSync(filePath, 'utf8').split('\n');
}

import {pc } from '../data/pc';
import { dsa } from '../data/dsa';
import { codd } from '../data/codd';
import { boolean } from '../data/boolean';

export const subjects = new Map<string, { name: string, questions: any[] }>([
    ['pc', { name: 'Program Construction', questions: pc }],
    ['dsa', { name: 'Data Structures and Algorithms', questions: dsa }],
    ['codd', { name: 'Computer Organization and Digital Design', questions: codd }],
    ['bool', { name: 'Boolean Algebra', questions: boolean }]
]);

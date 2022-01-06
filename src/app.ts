import { TransformerHero } from './transformer';
import { HumanHero } from './hero';
// Importáld be a HumanHero és TransformerHero osztályokat.


/**
 * Állítsd be helyesen a változót!
 * Neve: humans
 * Típusa: HumanHero példányok tömbje.
 * Hozz létre benne 3 HumanHero példányt, szabadon választott adatokkal.
 * @var {HumanHero[]} humans
 */
export const humans: HumanHero[] = [
    {
        id: 12,
        name: 'Gizi',
        photo: 'library',
        sex: 'female',
        age: 39,
        health: 100,
    },
    {
        id: 13,
        name: 'Marci',
        photo: 'library',
        sex: 'male',
        age: 29,
        health: 90,
    },
    {
        id: 14,
        name: 'Jolán',
        photo: 'library',
        sex: 'female',
        age: 69,
        health: 120,
    },
];

/**
 * Állítsd be helyesen a változót!
 * Neve: transformers
 * Típusa: TransformerHero példányok tömbje.
 * Hozz létre benne 3 TransformerHero példányt, szabadon választott adatokkal.
 * @var {TransformerHero[]} humans
 */
export const transformers: TransformerHero[] = [
    {
        id: 1,
        name: 'Lada',
        photo: 'library',
        wings: 2,
        wheels: 4,
        clan: 'ussr',
    },
    {
        id: 2,
        name: 'Trabant',
        photo: 'library',
        wings: 4,
        wheels: 8,
        clan: 'ddr',
    },
    {
        id: 3,
        name: 'Skoda',
        photo: 'library',
        wings: 45,
        wheels: 14,
        clan: 'czech',
    },
];

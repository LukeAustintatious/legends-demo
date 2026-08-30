// Sample datasheet data structure
// Replace this with your actual datasheet data

export type AlterationType = 'community' | 'inherited';

export type DatasheetData = {
  title: string;
  description: string;
  source: AlterationType;
  revision: number;
  data: any; // Replace this with the actual type
};

export const rhinoDatasheet: DatasheetData = {
  title: 'Space Marine Rhino',
  description: '10th edition profile with inherited 11th edition storm bolter',
  source: 'inherited',
  revision: 1,
  data: {
    stats: [
      {
        m: '6"',
        t: '8',
        sv: '2+',
        w: '8',
        ld: '8',
        oc: '3',
      },
    ],
    rangedWeapons: [
      {
        id: 'hunter-killer-missile',
        name: 'Hunter-killer missile [One Shot]',
        range: '48"',
        attacks: '1',
        bs: '2+',
        strength: '14',
        ap: '-3',
        damage: 'D6',
      },
      {
        id: 'storm-bolter',
        name: 'Storm bolter [Rapid Fire 2]',
        range: '24"',
        attacks: '2',
        bs: '3+',
        strength: '5',
        ap: '-1',
        damage: '1',
      },
    ],
    meleeWeapons: [
      {
        id: 'armoured-tracks',
        name: 'Armoured tracks',
        range: 'Melee',
        attacks: '3',
        ws: '4+',
        strength: '6',
        ap: '0',
        damage: '1',
      },
    ],
    abilities: [
      {
        id: 'core',
        name: 'Core',
        description: 'Deadly Demise D3, Firing Deck 2',
      },
      {
        id: 'faction',
        name: 'Faction',
        description: 'Oath of Moment',
      },
      {
        id: 'self-repair',
        name: 'Self Repair',
        description: 'At the end of your Command phase, this model regains 1 lost wound',
      },
    ],
    points: 75,
    keywords: ['Vehicle', 'Smoke', 'Transport', 'Dedicated Transport', 'Imperium', 'Rhino'],
    alterations: [
      {
        value: 'rangedWeapons[storm-bolter].strength',
        type: 'inherited'
      },
      {
        value: 'rangedWeapons[storm-bolter].ap',
        type: 'inherited'
      },
    ],
  },
};

export const firstDreadnoughtDatasheet: DatasheetData = {
  title: 'Space Marine Dreadnought',
  description: 'Adjusted by community vote - reduced points, -1 Attack',
  source: 'community',
  revision: 1,
  data: {
    stats: [
      {
        m: '6"',
        t: '8',
        sv: '2+',
        w: '8',
        ld: '8',
        oc: '3',
      },
    ],
    rangedWeapons: [
      {
        id: 'assault-cannon',
        name: 'Assault Cannon [Dev Wounds]',
        range: '24"',
        attacks: '6',
        bs: '3+',
        strength: '6',
        ap: '0',
        damage: '1',
      },
    ],
    meleeWeapons: [
      {
        id: 'dreadnought-combat-weapon',
        name: 'Dreadnought combat weapon',
        range: 'Melee',
        attacks: '4',
        ws: '3+',
        strength: '12',
        ap: '-2',
        damage: '3',
      },
    ],
    abilities: [
      {
        id: 'core',
        name: 'Core',
        description: 'Deadly Demise 1',
      },
      {
        id: 'faction',
        name: 'Faction',
        description: 'Oath of Moment',
      },
    ],
    points: 125,
    keywords: ['Vehicle', 'Walker', 'Smoke', 'Imperium', 'Dreadnought'],
    alterations: [
      {
        value: 'meleeWeapons[dreadnought-combat-weapon].attacks',
        type: 'community'
      },
      {
        value: 'points',
        type: 'community'
      },
    ],
  },
};

export const secondDreadnoughtDatasheet: DatasheetData = {
  title: 'Space Marine Dreadnought',
  description: 'Re-adjusted by community vote - added ability, improved ap, increased points',
  source: 'community',
  revision: 2,
  data: {
    stats: [
      {
        m: '6"',
        t: '8',
        sv: '2+',
        w: '8',
        ld: '8',
        oc: '3',
      },
    ],
    rangedWeapons: [
      {
        id: 'assault-cannon',
        name: 'Assault Cannon [Dev Wounds]',
        range: '24"',
        attacks: '6',
        bs: '3+',
        strength: '6',
        ap: '-1',
        damage: '1',
      },
    ],
    meleeWeapons: [
      {
        id: 'dreadnought-combat-weapon',
        name: 'Dreadnought combat weapon',
        range: 'Melee',
        attacks: '4',
        ws: '3+',
        strength: '12',
        ap: '-2',
        damage: '3',
      },
    ],
    abilities: [
      {
        id: 'core',
        name: 'Core',
        description: 'Deadly Demise 1',
      },
      {
        id: 'faction',
        name: 'Faction',
        description: 'Oath of Moment',
      },
      {
        id: 'wisdom-of-the-ancients',
        name: 'Wisdom of the Ancients (Aura)',
        description: 'While a friendly Adeptus Astartes Infantry unit is within 6" of this model, each time a model in that unit makes an attack, re-roll a Hit roll of 1',
      },
    ],
    points: 135,
    keywords: ['Vehicle', 'Walker', 'Smoke', 'Imperium', 'Dreadnought'],
    alterations: [
      {
        value: 'rangedWeapons[assault-cannon].ap',
        type: 'community'
      },
      {
        value: 'abilities[wisdom-of-the-ancients]',
        type: 'community'
      },
      {
        value: 'points',
        type: 'community'
      },
    ],
  },
};

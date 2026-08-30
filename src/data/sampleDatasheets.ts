// Sample datasheet data structure
// Replace this with your actual datasheet data

export type DatasheetType = 'official' | 'community' | 'upcoming';

export type DatasheetData = {
  title: string;
  description?: string;
  source: DatasheetType;
  data: any; // Replace this with the actual type
};

export const sampleOfficialDatasheet: DatasheetData = {
  title: 'Dreadnought',
  description: 'Classic walker unit from Legends',
  source: 'official',
  data: {
    profiles: [
      {
        m: '6"',
        t: '8',
        sv: '2+',
        w: '8',
        ld: '8',
        oc: '3',
      },
    ],
    weapons: [
      {
        name: 'Assault Cannon',
        range: '24"',
        attacks: '4',
        bs: '3+',
        strength: '6',
        ap: '-1',
        damage: '2',
      },
      {
        name: 'Power Fist',
        range: 'Melee',
        attacks: '3',
        bs: 'N/A',
        strength: '+2',
        ap: '-3',
        damage: '3',
      },
    ],
    abilities: [
      {
        name: 'Heavy Frame',
        description: 'Cannot charge or be charged. Can charge through obscuring terrain and ruins.',
      },
      {
        name: 'Weapon Mounts',
        description: 'One arm can mount any weapon. The other arm mounts a power fist or weapon.',
      },
    ],
    points: 115,
  },
};

export const sampleCommunityDatasheet: DatasheetData = {
  title: 'Dreadnought (Community Revised)',
  description: 'Slightly adjusted by community vote - reduced points, +1 Attack',
  source: 'community',
  data: {
    profiles: [
      {
        m: '6"',
        t: '8',
        sv: '2+',
        w: '8',
        ld: '8',
        oc: '3',
      },
    ],
    weapons: [
      {
        name: 'Assault Cannon',
        range: '24"',
        attacks: '5',
        bs: '3+',
        strength: '6',
        ap: '-1',
        damage: '2',
      },
      {
        name: 'Power Fist',
        range: 'Melee',
        attacks: '4',
        bs: 'N/A',
        strength: '+2',
        ap: '-3',
        damage: '3',
      },
    ],
    abilities: [
      {
        name: 'Heavy Frame',
        description: 'Cannot charge or be charged. Can charge through obscuring terrain and ruins.',
      },
      {
        name: 'Weapon Mounts',
        description: 'One arm can mount any weapon. The other arm mounts a power fist or weapon.',
      },
    ],
    points: 105,
  },
};

export const sampleUpcomingDatasheet: DatasheetData = {
  title: 'Dreadnought (Upcoming Release Profile)',
  description: 'Profile based on upcoming edition rules - new weapon options',
  source: 'upcoming',
  data: {
    profiles: [
      {
        m: '6"',
        t: '8',
        sv: '2+',
        w: '9',
        ld: '8',
        oc: '4',
      },
    ],
    weapons: [
      {
        name: 'Heavy Plasma Cannon',
        range: '24"',
        attacks: '2',
        bs: '3+',
        strength: '8',
        ap: '-3',
        damage: '3',
      },
      {
        name: 'Assault Cannon',
        range: '24"',
        attacks: '6',
        bs: '3+',
        strength: '6',
        ap: '-1',
        damage: '2',
      },
      {
        name: 'Power Fist',
        range: 'Melee',
        attacks: '4',
        bs: 'N/A',
        strength: '+2',
        ap: '-3',
        damage: '4',
      },
    ],
    abilities: [
      {
        name: 'Heavy Frame',
        description: 'Cannot charge or be charged. Can charge through obscuring terrain and ruins.',
      },
      {
        name: 'Weapon Mounts',
        description: 'One arm can mount any weapon. The other arm mounts a power fist or weapon.',
      },
      {
        name: 'Enhanced Armor',
        description: 'Improves armor save in melee combat.',
      },
    ],
    points: 125,
  },
};

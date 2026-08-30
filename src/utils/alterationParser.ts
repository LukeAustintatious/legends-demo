import { type AlterationType } from '../data/sampleDatasheets';

export interface ParsedAlteration {
  table: string; // 'rangedWeapons', 'meleeWeapons', 'stats'
  itemId?: string; // weapon id or index
  property: string; // 'strength', 'ap', etc.
  type: AlterationType;
}

export interface AlteredCell {
  source: AlterationType;
}

/**
 * Parses an alteration path like "rangedWeapons[storm-bolter].strength" 
 * or "abilities[wisdom-of-the-ancients]" (full object)
 * or top-level properties like "points"
 * into structured components
 */
export const parseAlterationPath = (path: string): ParsedAlteration | null => {
  // Try matching array pattern with property: table[itemId].property
  let match = path.match(/^(\w+)\[([^\]]+)\]\.(\w+)$/);
  
  if (match) {
    const [, table, itemId, property] = match;
    return {
      table,
      itemId,
      property,
      type: 'community', // Will be overridden by the alteration's type
    };
  }

  // Try matching array pattern without property (full object): table[itemId]
  match = path.match(/^(\w+)\[([^\]]+)\]$/);
  if (match) {
    const [, table, itemId] = match;
    return {
      table,
      itemId,
      property: '', // Empty property means the entire object is altered
      type: 'community', // Will be overridden by the alteration's type
    };
  }

  // Try matching top-level property: property (e.g., "points")
  match = path.match(/^(\w+)$/);
  if (match) {
    const [, property] = match;
    return {
      table: 'data',
      itemId: undefined,
      property,
      type: 'community', // Will be overridden by the alteration's type
    };
  }

  return null;
};

/**
 * Builds a lookup map for quickly checking if a cell is altered
 * Key format: "tableName.itemId.property" or "tableName.property" for indexed items
 */
export const buildAlteredCellsMap = (
  alterations: Array<{ value: string; type: AlterationType }> | undefined
): Map<string, AlteredCell> => {
  const map = new Map<string, AlteredCell>();

  if (!alterations) {
    return map;
  }

  alterations.forEach((alteration) => {
    const parsed = parseAlterationPath(alteration.value);
    
    if (!parsed) {
      return;
    }

    // Create a key for quick lookup
    const key = buildCellKey(parsed.table, parsed.itemId, parsed.property);
    map.set(key, { source: alteration.type });
  });

  return map;
};

/**
 * Generates a key for the altered cells map
 */
export const buildCellKey = (
  table: string,
  itemId: string | undefined,
  property: string
): string => {
  if (itemId) {
    if (property) {
      return `${table}.${itemId}.${property}`;
    } else {
      // For full object alterations (e.g., abilities[id])
      return `${table}.${itemId}`;
    }
  }
  return `${table}.${property}`;
};

/**
 * Checks if a cell is altered and returns the source type if it is
 */
export const getAlteredCellSource = (
  alteredCells: Map<string, AlteredCell>,
  table: string,
  itemId: string | undefined,
  property: string
): AlterationType | null => {
  const key = buildCellKey(table, itemId, property);
  const alteredCell = alteredCells.get(key);
  return alteredCell ? alteredCell.source : null;
};

/**
 * Maps source type to a CSS class name or color
 */
export const getSourceColorClass = (source: AlterationType): string => {
  return `altered-${source}`;
};

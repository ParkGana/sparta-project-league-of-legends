export interface ItemType {
    name: string;
    description: string;
    colloq: string;
    plaintext: string;
    into: string[];
    image: ItemImageType;
    gold: ItemGoldType;
    tags: string[];
    maps: ItemMapsType;
    stats: ItemStatsType;
}

/****************************************************************************************************/

interface ItemImageType {
    full: string;
    sprite: string;
    group: string;
    x: number;
    y: number;
    w: number;
    h: number;
}

interface ItemGoldType {
    base: 300;
    purchasable: true;
    total: 300;
    sell: 210;
}

interface ItemMapsType {
    11: boolean;
    12: boolean;
    21: boolean;
    22: boolean;
    30: boolean;
    33: boolean;
}

interface ItemStatsType {
    FlatMovementSpeedMod?: number;
}

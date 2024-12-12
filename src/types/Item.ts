export interface ItemsType {
    [key: string]: ItemValueType;
}

export interface ExtendedItemsType {
    version: string;
    data: ItemsType;
}

/****************************************************************************************************/

export interface ItemValueType {
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
    [key: string]: boolean;
}

interface ItemStatsType {
    FlatMovementSpeedMod?: number;
}

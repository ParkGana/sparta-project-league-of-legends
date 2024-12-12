export interface ChampionsType {
    [key: string]: ChampionValueType;
}

export interface ChampionType {
    [key: string]: ChampionDetailValueType;
}

/****************************************************************************************************/

interface ChampionValueType {
    version: string;
    id: string;
    key: string;
    name: string;
    title: string;
    blurb: string;
    info: ChampionInfoType;
    image: ChampionImageType;
    tags: string[];
    partype: string;
    stats: ChampionStatsType;
}

interface ChampionDetailValueType extends Omit<ChampionValueType, 'version'> {
    skins: ChampionSkinType[];
    lore: string;
    allytips: string[];
    enemytips: string[];
    spells: ChampionSpellType[];
    passive: ChampionPassiveType;
    recommended: any[];
}

/****************************************************************************************************/

interface ChampionInfoType {
    attack: number;
    defense: number;
    magic: number;
    difficulty: number;
}

interface ChampionImageType {
    full: string;
    sprite: string;
    group: string;
    x: number;
    y: number;
    w: number;
    h: number;
}

interface ChampionStatsType {
    hp: number;
    hpperlevel: number;
    mp: number;
    mpperlevel: number;
    movespeed: number;
    armor: number;
    armorperlevel: number;
    spellblock: number;
    spellblockperlevel: number;
    attackrange: number;
    hpregen: number;
    hpregenperlevel: number;
    mpregen: number;
    mpregenperlevel: number;
    crit: number;
    critperlevel: number;
    attackdamage: number;
    attackdamageperlevel: number;
    attackspeed: number;
    attackspeedperlevel: number;
}

interface ChampionSkinType {
    id: string;
    num: number;
    name: string;
    chromas: boolean;
}

interface ChampionSpellType {
    id: string;
    name: string;
    description: string;
    tooltip: string;
    leveltip: ChampionSpellLeveltipType;
    maxrank: number;
    cooldown: number[];
    cooldownBurn: string;
    cost: number[];
    costBurn: string;
    datavalues: any;
    effect: (null | number[])[];
    effectBurn: (null | string)[];
    vars: any[];
    costType: string;
    maxammo: string;
    range: number[];
    rangeBurn: string;
    image: ChampionImageType;
    resource: string;
}

interface ChampionSpellLeveltipType {
    label: string[];
    effect: string[];
}

interface ChampionPassiveType {
    name: string;
    description: string;
    image: ChampionImageType;
}

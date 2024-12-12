import { ChampionsType, ChampionType, ExtendedChampionType } from '@/types/Champion';
import { ExtendedItemsType, ItemsType } from '@/types/Item';

/* version 데이터 가져오기 */
export const fetchVersion = async (): Promise<string> => {
    const res = await fetch('https://ddragon.leagueoflegends.com/api/versions.json');
    const data = await res.json();

    return data[0];
};

/* champion 목록 데이터 가져오기 */
export const fetchChampions = async (): Promise<ChampionsType> => {
    const version = await fetchVersion();

    const res = await fetch(`https://ddragon.leagueoflegends.com/cdn/${version}/data/ko_KR/champion.json`);
    const data = await res.json();
    const championsData: ChampionsType = data.data;

    return championsData;
};

/* champion 데이터 가져오기 */
export const fetchChampion = async (id: string): Promise<ExtendedChampionType> => {
    const res = await fetch(`https://ddragon.leagueoflegends.com/cdn/14.24.1/data/ko_KR/champion/${id}.json`);
    const data = await res.json();
    const versionData: string = data.version;
    const championData: ChampionType = data.data;

    return { version: versionData, data: championData };
};

/* item 목록 데이터 가져오기 */
export const fetchItems = async (): Promise<ExtendedItemsType> => {
    const res = await fetch('https://ddragon.leagueoflegends.com/cdn/14.24.1/data/ko_KR/item.json');
    const data = await res.json();
    const versionData: string = data.version;
    const itemsData: ItemsType = data.data;

    return { version: versionData, data: itemsData };
};

'use server';
import { ChampionsType, ChampionType, ExtendedChampionType } from '@/types/Champion';
import { ExtendedItemsType, ItemsType } from '@/types/Item';

/* version 데이터 가져오기 */
export const fetchVersion = async (): Promise<string> => {
    try {
        const res = await fetch('https://ddragon.leagueoflegends.com/api/versions.json');

        const data: string[] = await res.json();

        return data[0];
    } catch (e: any) {
        throw new Error(e);
    }
};

/* champion 목록 데이터 가져오기 */
export const fetchChampions = async (revalidate: number): Promise<ChampionsType> => {
    try {
        const version = await fetchVersion();

        const res = await fetch(`https://ddragon.leagueoflegends.com/cdn/${version}/data/ko_KR/champion.json`, {
            next: {
                revalidate
            }
        });

        const data = await res.json();
        const championsData: ChampionsType = data.data;

        return championsData;
    } catch (e: any) {
        throw new Error(e);
    }
};

/* champion 데이터 가져오기 */
export const fetchChampion = async (id: string): Promise<ExtendedChampionType> => {
    try {
        const res = await fetch(`https://ddragon.leagueoflegends.com/cdn/14.24.1/data/ko_KR/champion/${id}.json`, {
            cache: 'no-store'
        });

        const data = await res.json();
        const versionData: string = data.version;
        const championData: ChampionType = data.data;

        return { version: versionData, data: championData };
    } catch (e: any) {
        throw new Error(e);
    }
};

/* item 목록 데이터 가져오기 */
export const fetchItems = async (): Promise<ExtendedItemsType> => {
    try {
        const res = await fetch('https://ddragon.leagueoflegends.com/cdn/14.24.1/data/ko_KR/item.json');

        const data = await res.json();
        const versionData: string = data.version;
        const itemsData: ItemsType = data.data;

        return { version: versionData, data: itemsData };
    } catch (e: any) {
        throw new Error(e);
    }
};

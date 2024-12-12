'use server';
import { ChampionsType } from '@/types/Champion';
import { fetchChampions } from '@/utils/serverAPI';

export default async function Champions() {
    const data: ChampionsType = await fetchChampions();
    console.log('champions => ', data);

    return <div>Champions</div>;
}

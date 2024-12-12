'use server';
import { ChampionType } from '@/types/Champion';
import { fetchChampion } from '@/utils/serverAPI';

export default async function Champion() {
    const data: ChampionType = await fetchChampion('Aatrox');
    console.log('champion => ', data);

    return <div>Champion</div>;
}

import ChampionList from '@/components/ChampionList';
import { ChampionsType } from '@/types/Champion';
import { fetchChampions } from '@/utils/serverAPI';

export default async function Champions() {
    const data: ChampionsType = await fetchChampions(60 * 60 * 24);

    return (
        <div className="max-w-[1200px] flex flex-col items-center gap-8 m-8 mx-auto">
            <p className="text-3xl text-primary font-bold">챔피언 목록</p>
            <div className="flex justify-center items-center px-8">
                <ChampionList data={data} />
            </div>
        </div>
    );
}

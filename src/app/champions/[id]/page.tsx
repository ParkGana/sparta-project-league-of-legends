'use server';
import { ExtendedChampionType } from '@/types/Champion';
import { formatChampionInfo } from '@/utils/formatData';
import { fetchChampion } from '@/utils/serverAPI';
import Image from 'next/image';

type ChampionProps = {
    params: {
        id: string;
    };
};

export default async function Champion({ params }: ChampionProps) {
    const { version, data }: ExtendedChampionType = await fetchChampion(params.id);
    // console.log('champion => ', data);

    const [key, value] = Object.entries(data)[0];

    return (
        <div className="max-w-[1200px] flex flex-col items-center gap-8 px-8 m-8 mx-auto">
            <div className="flex flex-col items-center gap-2">
                <p className="text-3xl text-primary font-bold">{value.name}</p>
                <p className="text-gray-500 font-bold">{value.title}</p>
            </div>
            <Image
                src={`https://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${key}.png`}
                width={200}
                height={200}
                alt=""
            />
            <p className="text-white">{value.lore}</p>
            <div className="flex gap-2">
                {Object.entries(value.info).map(([infoKey, infoValue], index) => (
                    <p className="flex gap-2">
                        <span className="text-primary">{formatChampionInfo(infoKey)}</span>
                        <span className="text-primary font-bold">{infoValue}</span>
                        {index < Object.keys(value.info).length - 1 && (
                            <span className="text-gray-500 font-bold mx-2">/</span>
                        )}
                    </p>
                ))}
            </div>
        </div>
    );
}

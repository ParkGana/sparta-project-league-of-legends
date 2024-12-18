import { ChampionValueType } from '@/types/Champion';
import Image from 'next/image';
import Link from 'next/link';

type ChampionCardProps = {
    data: {
        key: string;
        value: ChampionValueType;
    };
};

export default function ChampionCard({ data }: ChampionCardProps) {
    const { key, value } = data;

    return (
        <Link
            href={`/champions/${key}`}
            className="flex flex-col gap-2 items-center border-2 border-white rounded-lg p-4"
        >
            <Image
                src={`https://ddragon.leagueoflegends.com/cdn/${value.version}/img/champion/${key}.png`}
                width={100}
                height={100}
                alt=""
            />
            <p className="text-xl text-primary font-bold">{value.name}</p>
            <p className="text-sm text-gray-500 font-bold">{value.title}</p>
        </Link>
    );
}

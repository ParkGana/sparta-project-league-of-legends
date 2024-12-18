import { ItemValueType } from '@/types/Item';
import Image from 'next/image';

type ItemCardProps = {
    version: string;
    data: {
        key: string;
        value: ItemValueType;
    };
};

export default function ItemCard({ version, data }: ItemCardProps) {
    const { key, value } = data;

    return (
        <div className="flex flex-col gap-2 items-center border-2 border-white rounded-lg p-4">
            <Image
                src={`https://ddragon.leagueoflegends.com/cdn/${version}/img/item/${key}.png`}
                width={100}
                height={100}
                alt=""
            />
            <p className="text-xl text-primary font-bold">{value.name}</p>
            <p className="text-sm text-gray-500 font-bold">{value.plaintext}</p>
        </div>
    );
}

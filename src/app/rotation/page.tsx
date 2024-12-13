'use client';
import { useRotation } from '@/hooks/useRotation';
import Image from 'next/image';
import Link from 'next/link';

export default function Rotation() {
    const { data, isPending, isError } = useRotation();

    if (isPending) return <div>Loading...</div>;
    if (isError) return <div>Error...</div>;

    return (
        <div className="max-w-[1200px] flex flex-col items-center gap-8 m-8 mx-auto">
            <p className="text-3xl text-primary font-bold">챔피언 목록</p>
            <div className="flex justify-center items-center px-8">
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {Object.entries(data!).map(([key, value]) => (
                        <Link
                            key={key}
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
                    ))}
                </div>
            </div>
        </div>
    );
}

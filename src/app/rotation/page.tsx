'use client';
import { useRotation } from '@/hooks/useRotation';
import Image from 'next/image';
import ErrorImage from '@/public/error.svg';
import LoadingImage from '@/public/loading.svg';
import Link from 'next/link';

export default function Rotation() {
    const { data, isPending, isError, error, refetch } = useRotation();

    if (isPending) {
        return (
            <div className="max-w-[1200px] flex flex-col items-center gap-8 px-8 m-8 mx-auto">
                <Image src={LoadingImage} width="300" height="200" alt="error" />
                <p className="text-3xl text-white font-bold">데이터를 불어오는 중입니다.</p>
                <p className="text-xl text-gray-500 font-bold">조금만 기다려 주세요.</p>
            </div>
        );
    }

    if (isError) {
        return (
            <div className="max-w-[1200px] flex flex-col items-center gap-8 px-8 m-8 mx-auto">
                <Image src={ErrorImage} width="300" height="200" alt="error" />
                <p className="text-3xl text-white font-bold">일시적인 오류가 발생했습니다.</p>
                <p className="text-xl text-gray-500 font-bold">{error.message}</p>
                <button className="text-lg text-primary font-bold" onClick={() => refetch()}>
                    다시 시도
                </button>
            </div>
        );
    }

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

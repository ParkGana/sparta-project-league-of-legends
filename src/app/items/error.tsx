'use client';
import Image from 'next/image';
import ErrorImage from '@/public/error.svg';

type ErrorProps = {
    error: Error & { digest?: string };
    reset: () => void;
};

export default function Error({ error, reset }: ErrorProps) {
    return (
        <div className="max-w-[1200px] flex flex-col items-center gap-8 px-8 m-8 mx-auto">
            <Image src={ErrorImage} width="300" height="200" alt="error" />
            <p className="text-3xl text-white font-bold">일시적인 오류가 발생했습니다.</p>
            <p className="text-xl text-gray-500 font-bold">{error.message}</p>
            <button className="text-lg text-primary font-bold" onClick={() => reset()}>
                다시 시도
            </button>
        </div>
    );
}

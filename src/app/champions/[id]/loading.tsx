import Image from 'next/image';
import LoadingImage from '@/public/loading.svg';

export default function Loading() {
    return (
        <div className="max-w-[1200px] flex flex-col items-center gap-8 px-8 m-8 mx-auto">
            <Image src={LoadingImage} width="300" height="200" alt="error" />
            <p className="text-3xl text-white font-bold">데이터를 불어오는 중입니다.</p>
            <p className="text-xl text-gray-500 font-bold">조금만 기다려 주세요.</p>
        </div>
    );
}

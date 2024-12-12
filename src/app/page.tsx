import Image from 'next/image';
import Link from 'next/link';
import ChampionsImage from '@/public/champions.webp';
import ItemsImage from '@/public/items.webp';
import RotationImage from '@/public/rotation.webp';

export default function Home() {
    return (
        <div className="max-w-[1200px] flex flex-col items-center gap-8 m-8 mx-auto">
            <div className="flex flex-col items-center gap-2">
                <p className="text-3xl text-primary font-bold">League of Legends</p>
                <p className="text-sm text-gray-500 font-bold">Riot Games API를 활용하여 정보를 제공합니다.</p>
            </div>
            <div className="flex flex-col gap-8">
                <Link href="/champions" className="text-center">
                    <Image src={ChampionsImage} width="400" height="300" alt="" />
                    <p className="text-amber-400 font-bold pt-2">챔피언 목록</p>
                </Link>
                <Link href="/items" className="text-center">
                    <Image src={ItemsImage} width="400" height="300" alt="" />
                    <p className="text-amber-400 font-bold pt-2">아이템 목록</p>
                </Link>
                <Link href="/rotation" className="text-center">
                    <Image src={RotationImage} width="400" height="300" alt="" />
                    <p className="text-amber-400 font-bold pt-2">금주 로테이션</p>
                </Link>
            </div>
        </div>
    );
}

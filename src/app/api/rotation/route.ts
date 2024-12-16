import { ChampionsType } from '@/types/Champion';
import { RotationType } from '@/types/Rotation';
import { NextResponse } from 'next/server';

export async function GET(): Promise<NextResponse> {
    // rotation 데이터
    const rotationRes = await fetch('https://kr.api.riotgames.com/lol/platform/v3/champion-rotations', {
        headers: {
            'X-Riot-Token': `${process.env.NEXT_PUBLIC_RIOT_API_KEY}`
        }
    });

    const rotationData: RotationType = await rotationRes.json();

    // version 데이터
    const versionRes = await fetch('https://ddragon.leagueoflegends.com/api/versions.json');

    const versionData: string[] = await versionRes.json();

    // champions 데이터
    const championsRes = await fetch(
        `https://ddragon.leagueoflegends.com/cdn/${versionData[0]}/data/ko_KR/champion.json`
    );

    const data = await championsRes.json();
    const championsData: ChampionsType = data.data;

    // rotation 데이터와 champions 데이터를 활용해서 최종 데이터 추출
    const filteredData: ChampionsType = Object.fromEntries(
        Object.entries(championsData).filter(([key, value]) =>
            rotationData.freeChampionIds.includes(parseInt(value.key))
        )
    );

    return NextResponse.json(filteredData);
}

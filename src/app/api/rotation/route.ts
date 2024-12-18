import { ChampionsType } from '@/types/Champion';
import { RotationType } from '@/types/Rotation';
import { NextResponse } from 'next/server';

export async function GET(): Promise<NextResponse> {
    try {
        // rotation 데이터
        const rotationRes = await fetch('https://kr.api.riotgames.com/lol/platform/v3/champion-rotations', {
            headers: {
                'X-Riot-Token': `${process.env.NEXT_PUBLIC_RIOT_API_KEY}`
            }
        });

        if (!rotationRes.ok) {
            return NextResponse.json({ error: 'Failed to fetch rotation data' }, { status: rotationRes.status });
        }

        const rotationData: RotationType = await rotationRes.json();

        // version 데이터
        const versionRes = await fetch('https://ddragon.leagueoflegends.com/api/versions.json');

        if (!versionRes.ok) {
            return NextResponse.json({ error: 'Failed to fetch version data' }, { status: versionRes.status });
        }

        const versionData: string[] = await versionRes.json();

        // champions 데이터
        const championsRes = await fetch(
            `https://ddragon.leagueoflegends.com/cdn/${versionData[0]}/data/ko_KR/champion.json`
        );

        if (!championsRes.ok) {
            return NextResponse.json({ error: 'Failed to fetch champions data' }, { status: championsRes.status });
        }

        const data = await championsRes.json();
        const championsData: ChampionsType = data.data;

        // rotation 데이터와 champions 데이터를 활용해서 최종 데이터 추출
        const filteredData: ChampionsType = Object.fromEntries(
            Object.entries(championsData).filter(([key, value]) =>
                rotationData?.freeChampionIds?.includes(parseInt(value.key))
            )
        );

        return NextResponse.json(filteredData);
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: error.status });
    }
}

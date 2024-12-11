import { NextResponse } from 'next/server';

export async function GET(): Promise<NextResponse> {
    const res = await fetch('https://kr.api.riotgames.com/lol/platform/v3/champion-rotations', {
        headers: {
            'X-Riot-Token': `${process.env.RIOT_API_KEY}`
        }
    });

    const data = await res.json();

    return NextResponse.json(data);
}

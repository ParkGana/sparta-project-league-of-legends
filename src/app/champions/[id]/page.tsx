'use client';

import { useEffect } from 'react';

export default function Champion() {
    useEffect(() => {
        fetch('https://ddragon.leagueoflegends.com/cdn/14.24.1/data/ko_KR/champion/Aatrox.json')
            .then((res) => res.json())
            .then((data) => console.log(data));
    }, []);

    return <div>Champion</div>;
}

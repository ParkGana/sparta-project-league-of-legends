import { ChampionsType } from '@/types/Champion';
import { RotationType } from '@/types/Rotation';
import { fetchChampions } from '@/utils/serverAPI';
import { useQuery } from '@tanstack/react-query';

export function useRotation() {
    const { data, isPending, isError } = useQuery({
        queryKey: ['rotation'],
        queryFn: async () => {
            const rotationRes = await fetch('/api/rotation');
            const rotationData: RotationType = await rotationRes.json();
            const championsData: ChampionsType = await fetchChampions();

            const filteredData: ChampionsType = Object.fromEntries(
                Object.entries(championsData).filter(([key, value]) =>
                    rotationData.freeChampionIds.includes(parseInt(value.key))
                )
            );

            return filteredData;
        }
    });

    return { data, isPending, isError };
}

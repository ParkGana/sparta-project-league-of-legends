import { ChampionsType } from '@/types/Champion';
import { useQuery } from '@tanstack/react-query';

export function useRotation() {
    const query = useQuery({
        queryKey: ['rotation'],
        queryFn: async () => {
            const res = await fetch('/api/rotation');

            const data: ChampionsType = await res.json();

            return data;
        }
    });

    return query;
}

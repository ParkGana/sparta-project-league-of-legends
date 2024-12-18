import { ChampionsType } from '@/types/Champion';
import { v4 as uuid } from 'uuid';
import ChampionCard from './ChampionCard';

type ChampionListProps = {
    data: ChampionsType;
};

export default function ChampionList({ data }: ChampionListProps) {
    return (
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {Object.entries(data).map(([key, value]) => (
                <ChampionCard key={uuid()} data={{ key, value }} />
            ))}
        </div>
    );
}

import { ItemsType } from '@/types/Item';
import { v4 as uuid } from 'uuid';
import ItemCard from './ItemCard';

type ItemListProps = {
    version: string;
    data: ItemsType;
};

export default function ItemList({ version, data }: ItemListProps) {
    return (
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {Object.entries(data).map(([key, value]) => (
                <ItemCard key={uuid()} version={version} data={{ key, value }} />
            ))}
        </div>
    );
}

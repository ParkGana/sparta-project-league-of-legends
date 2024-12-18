import ItemList from '@/components/ItemList';
import { ExtendedItemsType } from '@/types/Item';
import { fetchItems } from '@/utils/serverAPI';

export default async function Items() {
    const { version, data }: ExtendedItemsType = await fetchItems();

    return (
        <div className="max-w-[1200px] flex flex-col items-center gap-8 m-8 mx-auto">
            <p className="text-3xl text-primary font-bold">아이템 목록</p>
            <div className="flex justify-center items-center px-8">
                <ItemList version={version} data={data} />
            </div>
        </div>
    );
}

'use server';
import { ItemsType } from '@/types/Item';
import { fetchItems } from '@/utils/serverAPI';

export default async function Items() {
    const data: ItemsType = await fetchItems();
    console.log('items => ', data);

    return <div>Items</div>;
}

import { ItemList, HttpItemsResponse, ItemDetails, Product, ProductDescription, Item } from '@core/entities/core.entitie';

const AUTHOR =  { // Esta información no entendí de donde sacarla
    name: 'Alonso',
    lastname: 'Velez'
}

export function normalizeItemList(response: HttpItemsResponse): ItemList {
    return {
        author: {...AUTHOR}, 
        categories: response?.filters[0]?.values[0]?.path_from_root.map(data => data.name),
        items: response.results.map(item => normalizeItemBase(item)).slice(0, 4)
    };
}


export function normalizeItemDetails(description: ProductDescription, details: Product): ItemDetails {
    return {
        author: {...AUTHOR},
        item: {
            ...normalizeItemBase(details),
            sold_quantity: details.sold_quantity,
            description: description.plain_text
        }
    }
}

function normalizeItemBase(details: Product): Item {
    return {
        id: details.id,
            title: details.title,
            price: {
                currency: details.currency_id,
                amount: details.price,
                decimals: 2 // Este dato no lo encontré en el objeto
            },
            picture: details?.pictures ? details?.pictures[0]?.url : details?.thumbnail,
            condition: details.condition,
            free_shipping: details?.shipping?.free_shipping,
            place: details?.address?.state_name
    }
}

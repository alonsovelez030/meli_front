export interface GlobalState{
    itemSelected: ItemDetails;
    itemList: ItemList;
    ui: UiState;
}

export interface UiState {
    loadScreen?: boolean;
}

export interface Filters {
    search?: string;
    id?: string;
}

export interface ItemList {
    author: Author;
    categories: string[];
    items: Item[];
}

export interface Item {
    id: string;
    title: string;
    price: ItemPrice;
    picture: string;
    condition: string;
    free_shipping: boolean;
    place?: string;
}

export interface ItemPrice {
    currency: string;
    amount: number;
    decimals: number;
}

export interface Author {
    name: string;
    lastname: string;
}

export interface ItemDetail extends Item {
    sold_quantity?: number;
    description?: string;
}

export interface ItemDetails extends Partial<ItemList>{
    item: ItemDetail;
}

/****  Response entities ****/
export interface HttpItemsResponse {
    results: Product[];
    filters: Categories[];
}

export interface Categories {
    id: string;
    name: string;
    type: string;
    values: CategorieValues[];
}

export interface CategorieValues {
    id: string;
    name: string;
    path_from_root: Categorie[];
}

export interface Categorie {
    id: string;
    name: string;
}

export interface Product {
    id: string;
    site_id: string;
    title: string;
    subtitle: string;
    seller_id: number;
    category_id: string;
    official_store_id: string;
    price: number;
    base_price: number;
    original_price: number;
    currency_id: string;
    initial_quantity: number;
    available_quantity: number;
    condition: string;
    sold_quantity: number;
    pictures: ProductPicture[];
    thumbnail: string;
    shipping?: ShippingProduct;
    address?: ProductAddress;
}

export interface ShippingProduct {
    free_shipping: boolean;
    mode: string;
    tags: Array<{self_service_in: string, mandatory_free_shipping: string}>;
    logistic_type: string;
    store_pick_up: boolean;
}

export interface ProductAddress {
    state_id: string;
    state_name: string;
    city_id: number;
    city_name: string;
}

export interface ProductPicture {
    id: string;
    url: string;
    secure_url: string;
    size: string;
    max_size: string;
    quality: string;
}

export interface ProductDescription {
    text: string;
    plain_text: string;
    last_updated: Date;
    date_created: Date;
    snapshot: any;
}

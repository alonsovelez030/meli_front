export interface GlobalState{
    selectedProduct: Product;
    productList: Product[];
    breadCrumb: BreadCrumbEntitie[];
    ui: UiState;
}

export interface UiState {
    loadScreen?: boolean;
}


export interface BreadCrumbEntitie {
    id: string;
    name: string;
}

export interface Filters {
    search: string;
}

export interface ProductsResponse {
    results: Product[];
    filters: Filters[];
}

export interface Filters {
    id: string;
    name: string;
    type: string;
    values: [
        {
            id: string,
            name: string,
            path_from_root: BreadCrumbEntitie[];
        }
    ];
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

export interface ProducDescription {
    text: string;
    plain_text: string;
    last_updated: Date;
    date_created: Date;
    snapshot: any;
}
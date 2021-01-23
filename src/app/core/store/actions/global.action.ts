import { createAction, props } from '@ngrx/store';
import { AdapterUi } from '@core/store/adapters/global.adapter';
import { Filters, ItemDetails, ItemList, Product } from '@app/core/entities/core.entitie';

export enum GlobalAction {
    ClearAll = '[GLOBAL] Clear all Global',
    Empty = '[EMPTY]',
    UiGlobal = '[GLOBAL] Ui Global',
    GetItemsAction = '[GLOBAL] Get items',
    AddItems = '[GLOBAL] Add items',

    GetItemDetailsAction = '[GLOBAL] Get details',
    GetItemDescription = '[GLOBAL] Get description',
    AddItemDetails = '[GLOBAL] Add details',
}

export const clearAll = createAction(GlobalAction.ClearAll);
export const uiGlobal = createAction(GlobalAction.UiGlobal, props<{ui: Array<AdapterUi>}>());
export const Empty = createAction(GlobalAction.Empty);

export const getItemsAction = createAction(GlobalAction.GetItemsAction, props<{payload: Filters}>());
export const addItems = createAction(GlobalAction.AddItems, props<{payload: ItemList}>());

export const getDetailsAction = createAction(GlobalAction.GetItemDetailsAction, props<{payload: Filters}>());
export const getDescription = createAction(GlobalAction.GetItemDescription, props<{filters: Filters, details: Product}>());
export const addDetails = createAction(GlobalAction.AddItemDetails, props<{payload: ItemDetails}>());

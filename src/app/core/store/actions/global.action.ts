import { createAction, props } from '@ngrx/store';
import { AdapterUi } from '@core/store/adapters/global.adapter';
import { BreadCrumbEntitie, Filters, Product } from '@app/core/entities/core.entitie';

export enum GlobalAction {
    ClearAll = '[GLOBAL] Clear all Global',
    Empty = '[EMPTY]',
    UiGlobal = '[GLOBAL] Ui Global',
    GetProducts = '[GLOBAL] Get products',
    AddProducts = '[GLOBAL] Add products',
    AddBreadCrumb = '[GLOBAL] Add breadCrumb'
}

export const clearAll = createAction(GlobalAction.ClearAll);
export const uiGlobal = createAction(GlobalAction.UiGlobal, props<{ui: Array<AdapterUi>}>());
export const Empty = createAction(GlobalAction.Empty);

export const getProducts = createAction(GlobalAction.GetProducts, props<{payload: Filters}>());
export const addProducts = createAction(GlobalAction.AddProducts, props<{payload: Product[]}>());
export const addBreadCrumb = createAction(GlobalAction.AddBreadCrumb, props<{payload: BreadCrumbEntitie[]}>());

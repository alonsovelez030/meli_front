import { Action, createReducer, on, createFeatureSelector, createSelector, State } from '@ngrx/store';
import { GlobalAdapter } from '@core/store/adapters/global.adapter';

import * as GlobalAction from '@core/store/actions/global.action';
import { GlobalState } from '@core/entities/core.entitie';

const initialState: GlobalState = {
  selectedProduct: null,
  productList: [],
  breadCrumb: null,
  ui: {
    loadScreen: true
  }
};

const globalReducerCreate = createReducer(
  initialState,
  on(GlobalAction.uiGlobal, (state, { ui }) => GlobalAdapter.setUi(ui, state)),
  on(GlobalAction.addProducts, (state, { payload }) => ({...state, productList: [...payload]})),
  on(GlobalAction.addBreadCrumb, (state, { payload }) => ({...state, breadCrumb: payload ? [...payload] : null})),
  on(GlobalAction.clearAll, () => initialState)
);

export function GlobalReducer(state: GlobalState, action: Action) {
  return globalReducerCreate(state, action);
}

export const getGlobal = createFeatureSelector<GlobalState>('global');
export const getProducts = createSelector(getGlobal, ({productList}) => productList);
export const getBreadCrumb = createSelector(getGlobal, ({breadCrumb}) => breadCrumb);
export const getUiGlobal = createSelector(getGlobal, ({ui}) => ui);

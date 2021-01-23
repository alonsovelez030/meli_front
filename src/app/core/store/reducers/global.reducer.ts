import { Action, createReducer, on, createFeatureSelector, createSelector, State } from '@ngrx/store';
import { GlobalAdapter } from '@core/store/adapters/global.adapter';

import * as GlobalAction from '@core/store/actions/global.action';
import { GlobalState } from '@core/entities/core.entitie';

const initialState: GlobalState = {
  itemSelected: null,
  itemList: null,
  ui: {
    loadScreen: true
  }
};

const globalReducerCreate = createReducer(
  initialState,
  on(GlobalAction.uiGlobal, (state, { ui }) => GlobalAdapter.setUi(ui, state)),
  on(GlobalAction.addItems, (state, { payload }) => ({...state, itemList: {...payload}})),
  on(GlobalAction.addDetails, (state, { payload }) => ({...state, itemSelected: {...payload}})),
  on(GlobalAction.clearAll, () => initialState)
);

export function GlobalReducer(state: GlobalState, action: Action) {
  return globalReducerCreate(state, action);
}

export const getGlobal = createFeatureSelector<GlobalState>('global');
export const getItems = createSelector(getGlobal, ({itemList}) => itemList?.items);
export const getItemDetails = createSelector(getGlobal, ({itemSelected}) => itemSelected?.item);
export const getBreadCrumb = createSelector(getGlobal, ({itemList}) => itemList?.categories);
export const getUiGlobal = createSelector(getGlobal, ({ui}) => ui);

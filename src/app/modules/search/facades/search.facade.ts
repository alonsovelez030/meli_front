import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { AppState } from '@core/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import * as GlobalAction from '@core/store/actions/global.action';
import * as GlobalRed from '@core/store/reducers/global.reducer';
import { AdapterUi } from '@core/store/adapters/global.adapter';
import { Filters, Item, UiState } from '@app/core/entities/core.entitie';


@Injectable()
export class SearchFacade {

  private getItems$: Observable<Item[]> = this.store.pipe(select(GlobalRed.getItems));
  private getBreadCrumb$: Observable<string[]> = this.store.pipe(select(GlobalRed.getBreadCrumb));
  private getUi$: Observable<UiState> = this.store.pipe(select(GlobalRed.getUiGlobal));

  constructor(private store: Store<AppState>) { }

  get getItemsData$(): Observable<Item[]> {
    return this.getItems$;
  }

  get getBreadCrumbData$(): Observable<string[]> {
    return this.getBreadCrumb$;
  }

  get getLoadScreen$(): Observable<boolean> {
    return this.getUi$.pipe(map(data => data.loadScreen));
  }

  public getItemsFn(filter: Filters): void {
    this.setUi([{name: 'loadScreen', value: true}]);
    this.store.dispatch(GlobalAction.getItemsAction({payload: filter}));
  }

  public setUi(setUi: Array<AdapterUi>): void {
    this.store.dispatch(GlobalAction.uiGlobal({ ui: setUi}));
  }
}

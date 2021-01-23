import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { AppState } from '@core/store';
import { Observable } from 'rxjs';

import * as GlobalAction from '@core/store/actions/global.action';
import * as GlobalRed from '@core/store/reducers/global.reducer';
import { AdapterUi } from '@core/store/adapters/global.adapter';
import { map } from 'rxjs/operators';
import { Filters, ItemDetail, ItemDetails, UiState } from '@app/core/entities/core.entitie';


@Injectable()
export class DetailsFacade {

  private getItemDetails$: Observable<ItemDetail> = this.store.pipe(select(GlobalRed.getItemDetails));
  private getBreadCrumb$: Observable<string[]> = this.store.pipe(select(GlobalRed.getBreadCrumb));
  private getUi$: Observable<UiState> = this.store.pipe(select(GlobalRed.getUiGlobal));

  constructor(private store: Store<AppState>) { }

  get getBreadCrumbData$(): Observable<string[]> {
    return this.getBreadCrumb$;
  }

  get getItemDetailsData$(): Observable<ItemDetail> {
    return this.getItemDetails$;
  }

  get getLoadScreen$(): Observable<boolean> {
    return this.getUi$.pipe(map(data => data.loadScreen));
  }

  public getItemDetailFn(filter: Filters): void {
    this.setUi([{name: 'loadScreen', value: true}]);
    this.store.dispatch(GlobalAction.getDetailsAction({payload: filter}));
  }

  public setUi(setUi: Array<AdapterUi>): void {
    this.store.dispatch(GlobalAction.uiGlobal({ ui: setUi}));
  }
}

import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { AppState } from '@core/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import * as GlobalAction from '@core/store/actions/global.action';
import * as GlobalRed from '@core/store/reducers/global.reducer';
import { AdapterUi } from '@core/store/adapters/global.adapter';
import { BreadCrumbEntitie, Filters, Product, UiState } from '@app/core/entities/core.entitie';


@Injectable()
export class SearchFacade {

  private getProducts$: Observable<Product[]> = this.store.pipe(select(GlobalRed.getProducts));
  private getBreadCrumb$: Observable<BreadCrumbEntitie[]> = this.store.pipe(select(GlobalRed.getBreadCrumb));
  private getUi$: Observable<UiState> = this.store.pipe(select(GlobalRed.getUiGlobal));

  constructor(private store: Store<AppState>) { }

  get getProductsData$(): Observable<Product[]> {
    return this.getProducts$;
  }

  get getBreadCrumbData$(): Observable<BreadCrumbEntitie[]> {
    return this.getBreadCrumb$;
  }

  get getLoadScreen$(): Observable<boolean> {
    return this.getUi$.pipe(map(data => data.loadScreen));
  }

  public getProducts(filter: Filters): void {
    this.setUi([{name: 'loadScreen', value: true}]);
    this.store.dispatch(GlobalAction.getProducts({payload: filter}));
  }

  public setUi(setUi: Array<AdapterUi>): void {
    this.store.dispatch(GlobalAction.uiGlobal({ ui: setUi}));
  }
}

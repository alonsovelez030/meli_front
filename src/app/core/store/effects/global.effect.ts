import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { of } from 'rxjs';
import { GlobalService } from '@core/services/global.services';
import { PopUpNotificationService } from '@core/services/popup-notification.service';

import * as GlobalAction from '@core/store/actions/global.action';
import { Filters, ProductsResponse } from '@app/core/entities/core.entitie';


@Injectable()
export class GlobalEffect {

  constructor(private actions$: Actions,
              private globalService: GlobalService,
              private popupService: PopUpNotificationService) {}


  getProducts$ = createEffect(() => this.actions$.pipe(
      ofType(GlobalAction.getProducts),
      map( ({payload}) => payload ),
      mergeMap((filters: Filters) => this.globalService.getProducts(filters)
      .pipe(
        mergeMap((response: ProductsResponse) => [
          GlobalAction.addProducts({payload: response.results.splice(0, 4)}),
          GlobalAction.addBreadCrumb({payload: response?.filters[0]?.values[0]?.path_from_root}),
          GlobalAction.uiGlobal({ui: [{name: 'loadScreen', value: false}]})
        ]),
        catchError((err: HttpErrorResponse) => {
          if (err.status !== 401) {
            this.popupService.error(err.error.error);
          }
          return of(GlobalAction.Empty());
        })
      ))
    )
  );

}

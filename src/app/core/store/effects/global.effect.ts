import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { of } from 'rxjs';
import { GlobalService } from '@core/services/global.services';
import { PopUpNotificationService } from '@core/services/popup-notification.service';

import * as GlobalAction from '@core/store/actions/global.action';
import { Filters, HttpItemsResponse, Product, ProductDescription } from '@app/core/entities/core.entitie';
import { normalizeItemDetails, normalizeItemList } from '@app/core/utils/serialize.util';


@Injectable()
export class GlobalEffect {

  constructor(private actions$: Actions,
              private globalService: GlobalService,
              private popupService: PopUpNotificationService) {}


  getItems$ = createEffect(() => this.actions$.pipe(
      ofType(GlobalAction.getItemsAction),
      map( ({payload}) => payload ),
      mergeMap((filters: Filters) => this.globalService.getItemsService(filters)
      .pipe(
        mergeMap((response: HttpItemsResponse) => [
          GlobalAction.addItems({payload: normalizeItemList(response)}),
          GlobalAction.uiGlobal({ui: [{name: 'loadScreen', value: false}]})
        ]),
        catchError((err: HttpErrorResponse) => {
          this.popupService.error(err?.error?.error);
          return of(GlobalAction.Empty());
        })
      ))
    )
  );


  getDetails$ = createEffect(() => this.actions$.pipe(
      ofType(GlobalAction.getDetailsAction),
      map( ({payload}) => payload ),
      mergeMap((filters: Filters) => this.globalService.getItemDetails(filters)
      .pipe(
        map((response: Product) => (GlobalAction.getDescription({filters, details: response}))),
        catchError((err: HttpErrorResponse) => {
          this.popupService.error(err?.error?.error);
          return of(GlobalAction.Empty());
        })
      ))
    )
  );


  getDescription$ = createEffect(() => this.actions$.pipe(
      ofType(GlobalAction.getDescription),
      mergeMap(({filters, details}) => this.globalService.getItemDescription(filters)
      .pipe(
        mergeMap((description: ProductDescription) => [
          GlobalAction.addDetails({payload: normalizeItemDetails(description, details)}),
          GlobalAction.uiGlobal({ui: [{name: 'loadScreen', value: false}]})
        ]),
        catchError((err: HttpErrorResponse) => {
          this.popupService.error(err?.error?.error);
          return of(GlobalAction.Empty());
        })
      ))
    )
  );

}

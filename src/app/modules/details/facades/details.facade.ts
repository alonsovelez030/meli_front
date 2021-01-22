import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { AppState } from '@core/store';
import { Observable } from 'rxjs';

import * as GlobalAction from '@core/store/actions/global.action';
import * as GlobalRed from '@core/store/reducers/global.reducer';
import { AdapterUi } from '@core/store/adapters/global.adapter';
import { map } from 'rxjs/operators';


@Injectable()
export class DetailsFacade {

  constructor(private store: Store<AppState>) { }
}

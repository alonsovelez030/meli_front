import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { GlobalService } from './services/global.services';
import { PopUpNotificationService } from './services/popup-notification.service';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { GlobalReducer } from '@core/store/reducers/global.reducer';
import { GlobalEffect } from '@core/store/effects/global.effect';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forRoot({global: GlobalReducer}),
    EffectsModule.forRoot([GlobalEffect]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: true }),
  ],
  providers: [
    GlobalService,
    PopUpNotificationService
  ]
})
export class CoreModule { }

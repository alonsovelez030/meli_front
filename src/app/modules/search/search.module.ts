import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';
import { SearchComponent } from './search.component';
import { ItemComponent } from './components/item/item.component';
import { SharedModule } from '@modules/shared/shared.module';


@NgModule({
  declarations: [SearchComponent, ItemComponent],
  imports: [
    CommonModule,
    SearchRoutingModule,
    SharedModule
  ]
})
export class SearchModule { }

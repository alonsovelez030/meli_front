import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@modules/shared/shared.module';

import { SearchRoutingModule } from './search-routing.module';
import { SearchComponent } from './search.component';
import { ItemComponent } from './components/item/item.component';
import { SearchFacade } from './facades/search.facade';


@NgModule({
  declarations: [SearchComponent, ItemComponent],
  imports: [
    CommonModule,
    SearchRoutingModule,
    SharedModule
  ],
  providers: [SearchFacade]
})
export class SearchModule { }

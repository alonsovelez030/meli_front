import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [LayoutComponent, NavBarComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class LayoutModule { }

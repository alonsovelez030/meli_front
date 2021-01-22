import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { LoaderScreenComponent } from './components/loader-screen/loader-screen.component';

@NgModule({
  declarations: [
    BreadcrumbComponent,
    LoaderScreenComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BreadcrumbComponent,
    LoaderScreenComponent
  ]
})
export class SharedModule { }

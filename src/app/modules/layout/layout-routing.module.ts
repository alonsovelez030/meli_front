import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'items',
        loadChildren: () => import('@app/modules/search/search.module').then(m => m.SearchModule),
      },
      {
        path: 'items/:id',
        loadChildren: () => import('@app/modules/details/details.module').then(m => m.DetailsModule),
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }

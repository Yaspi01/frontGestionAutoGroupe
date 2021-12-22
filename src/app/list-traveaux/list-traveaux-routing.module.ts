import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListTraveauxPage } from './list-traveaux.page';

const routes: Routes = [
  {
    path: '',
    component: ListTraveauxPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListTraveauxPageRoutingModule {}

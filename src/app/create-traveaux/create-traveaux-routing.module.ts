import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateTraveauxPage } from './create-traveaux.page';

const routes: Routes = [
  {
    path: '',
    component: CreateTraveauxPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateTraveauxPageRoutingModule {}

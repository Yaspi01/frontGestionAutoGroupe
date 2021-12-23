import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListTraveauxPageRoutingModule } from './list-traveaux-routing.module';

import { ListTraveauxPage } from './list-traveaux.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    ListTraveauxPageRoutingModule
  ],
  declarations: [ListTraveauxPage]
})
export class ListTraveauxPageModule {}

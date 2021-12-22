import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateTraveauxPageRoutingModule } from './create-traveaux-routing.module';

import { CreateTraveauxPage } from './create-traveaux.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateTraveauxPageRoutingModule
  ],
  declarations: [CreateTraveauxPage]
})
export class CreateTraveauxPageModule {}

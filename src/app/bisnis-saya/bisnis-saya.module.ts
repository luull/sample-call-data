import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BisnisSayaPageRoutingModule } from './bisnis-saya-routing.module';

import { BisnisSayaPage } from './bisnis-saya.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BisnisSayaPageRoutingModule
  ],
  declarations: [BisnisSayaPage]
})
export class BisnisSayaPageModule {}

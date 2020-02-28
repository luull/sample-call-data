import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PeluangPageRoutingModule } from './peluang-routing.module';

import { PeluangPage } from './peluang.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PeluangPageRoutingModule
  ],
  declarations: [PeluangPage]
})
export class PeluangPageModule {}

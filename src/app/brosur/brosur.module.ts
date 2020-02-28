import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BrosurPageRoutingModule } from './brosur-routing.module';

import { BrosurPage } from './brosur.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BrosurPageRoutingModule
  ],
  declarations: [BrosurPage]
})
export class BrosurPageModule {}

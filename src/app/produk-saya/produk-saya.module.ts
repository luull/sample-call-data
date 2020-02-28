import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProdukSayaPageRoutingModule } from './produk-saya-routing.module';

import { ProdukSayaPage } from './produk-saya.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProdukSayaPageRoutingModule
  ],
  declarations: [ProdukSayaPage]
})
export class ProdukSayaPageModule {}

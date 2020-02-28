import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DaftarMitraPageRoutingModule } from './daftar-mitra-routing.module';

import { DaftarMitraPage } from './daftar-mitra.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DaftarMitraPageRoutingModule
  ],
  declarations: [DaftarMitraPage]
})
export class DaftarMitraPageModule {}

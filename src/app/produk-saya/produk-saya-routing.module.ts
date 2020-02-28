import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProdukSayaPage } from './produk-saya.page';

const routes: Routes = [
  {
    path: '',
    component: ProdukSayaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProdukSayaPageRoutingModule {}

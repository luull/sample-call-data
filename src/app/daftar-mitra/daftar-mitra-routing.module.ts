import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DaftarMitraPage } from './daftar-mitra.page';

const routes: Routes = [
  {
    path: '',
    component: DaftarMitraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DaftarMitraPageRoutingModule {}

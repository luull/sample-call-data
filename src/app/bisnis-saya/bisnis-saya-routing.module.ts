import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BisnisSayaPage } from './bisnis-saya.page';

const routes: Routes = [
  {
    path: '',
    component: BisnisSayaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BisnisSayaPageRoutingModule {}

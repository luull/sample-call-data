import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PeluangPage } from './peluang.page';

const routes: Routes = [
  {
    path: '',
    component: PeluangPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PeluangPageRoutingModule {}

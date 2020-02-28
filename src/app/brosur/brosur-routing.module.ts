import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BrosurPage } from './brosur.page';

const routes: Routes = [
  {
    path: '',
    component: BrosurPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BrosurPageRoutingModule {}

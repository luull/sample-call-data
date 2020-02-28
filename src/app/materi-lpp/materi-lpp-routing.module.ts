import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MateriLppPage } from './materi-lpp.page';

const routes: Routes = [
  {
    path: '',
    component: MateriLppPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MateriLppPageRoutingModule {}

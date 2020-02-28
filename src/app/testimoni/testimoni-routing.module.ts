import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestimoniPage } from './testimoni.page';

const routes: Routes = [
  {
    path: '',
    component: TestimoniPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestimoniPageRoutingModule {}

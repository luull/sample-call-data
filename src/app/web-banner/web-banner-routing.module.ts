import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WebBannerPage } from './web-banner.page';

const routes: Routes = [
  {
    path: '',
    component: WebBannerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WebBannerPageRoutingModule {}

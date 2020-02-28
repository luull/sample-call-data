import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WebBannerPageRoutingModule } from './web-banner-routing.module';

import { WebBannerPage } from './web-banner.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WebBannerPageRoutingModule
  ],
  declarations: [WebBannerPage]
})
export class WebBannerPageModule {}

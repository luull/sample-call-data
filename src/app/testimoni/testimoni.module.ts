import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TestimoniPageRoutingModule } from './testimoni-routing.module';

import { TestimoniPage } from './testimoni.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TestimoniPageRoutingModule
  ],
  declarations: [TestimoniPage]
})
export class TestimoniPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MateriLppPageRoutingModule } from './materi-lpp-routing.module';

import { MateriLppPage } from './materi-lpp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MateriLppPageRoutingModule
  ],
  declarations: [MateriLppPage]
})
export class MateriLppPageModule {}

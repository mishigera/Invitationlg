import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AuxhomePageRoutingModule } from './auxhome-routing.module';

import { AuxhomePage } from './auxhome.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AuxhomePageRoutingModule
  ],
  declarations: [AuxhomePage]
})
export class AuxhomePageModule {}

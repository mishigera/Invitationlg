import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LesliemodePageRoutingModule } from './lesliemode-routing.module';

import { LesliemodePage } from './lesliemode.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LesliemodePageRoutingModule
  ],
  declarations: [LesliemodePage]
})
export class LesliemodePageModule {}

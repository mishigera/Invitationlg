import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TfkadminPageRoutingModule } from './tfkadmin-routing.module';

import { TfkadminPage } from './tfkadmin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TfkadminPageRoutingModule
  ],
  declarations: [TfkadminPage]
})
export class TfkadminPageModule {}

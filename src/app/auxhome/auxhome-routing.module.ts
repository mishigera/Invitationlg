import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuxhomePage } from './auxhome.page';

const routes: Routes = [
  {
    path: '',
    component: AuxhomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuxhomePageRoutingModule {}

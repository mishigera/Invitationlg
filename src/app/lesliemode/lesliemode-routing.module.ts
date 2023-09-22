import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LesliemodePage } from './lesliemode.page';

const routes: Routes = [
  {
    path: '',
    component: LesliemodePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LesliemodePageRoutingModule {}

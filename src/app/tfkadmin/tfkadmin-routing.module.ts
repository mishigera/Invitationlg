import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TfkadminPage } from './tfkadmin.page';

const routes: Routes = [
  {
    path: '',
    component: TfkadminPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TfkadminPageRoutingModule {}

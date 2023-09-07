import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RestorepassPage } from './restorepass.page';

const routes: Routes = [
  {
    path: '',
    component: RestorepassPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RestorepassPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaintingPage } from './painting.page';

const routes: Routes = [
  {
    path: '',
    component: PaintingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaintingPageRoutingModule {}

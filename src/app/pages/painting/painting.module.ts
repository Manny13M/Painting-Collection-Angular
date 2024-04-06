import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaintingPageRoutingModule } from './painting-routing.module';

import { PaintingPage } from './painting.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaintingPageRoutingModule,
    ComponentsModule
  ],
  declarations: [PaintingPage]
})
export class PaintingPageModule {}

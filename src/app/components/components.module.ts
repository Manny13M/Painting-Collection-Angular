import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaintingCollectionDescComponent } from './painting-collection-desc/painting-collection-desc.component';
import { NumberOfPaintingsComponent } from './number-of-paintings/number-of-paintings.component';

@NgModule({
  declarations: [PaintingCollectionDescComponent, NumberOfPaintingsComponent],
  imports: [
    CommonModule
  ],
  exports: [PaintingCollectionDescComponent, NumberOfPaintingsComponent]
})
export class ComponentsModule { }

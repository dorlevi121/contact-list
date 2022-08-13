import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SnackBarComponent } from './snack-bar/snack-bar.component';
import { SkeletonRectComponent } from './skeleton-rect/skeleton-rect.component';
import { SkeletonDirective } from './skeleton.directive';



@NgModule({
  declarations: [
    SnackBarComponent,
    SkeletonRectComponent,
    SkeletonDirective
  ],
  imports: [
    CommonModule
  ],
   exports: [
    SnackBarComponent,
    SkeletonRectComponent,
    SkeletonDirective
   ]
})
export class SharedModule { }

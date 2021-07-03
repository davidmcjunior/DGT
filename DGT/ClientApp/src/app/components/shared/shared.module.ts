import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { LoadingOverlayComponent } from './loading-overlay.component';



@NgModule({
  declarations: [
    HeaderComponent,
    LoadingOverlayComponent
  ],
  exports: [
    LoadingOverlayComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }

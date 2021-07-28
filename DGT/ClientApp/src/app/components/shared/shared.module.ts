import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { LoadingOverlayComponent } from './loading-overlay.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { TooltipModule } from '@progress/kendo-angular-tooltip';
import { IconButtonComponent } from './icon-button/icon-button.component';



@NgModule({
  declarations: [
    HeaderComponent,
    LoadingOverlayComponent,
    IconButtonComponent
  ],
  exports: [
    // TooltipModule,
    LoadingOverlayComponent,
    IconButtonComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    // TooltipModule
  ]
})
export class SharedModule { }

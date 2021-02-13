import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CustomCheckDirective, AwaitsClickOutsideDirective } from './directives';
import {
    ButtonGroupComponent, CardComponent, ChartComponent, CheckboxGroupComponent, FilterCardComponent, ReportComponent, ThumbnailComponent, ThumbnailsContainerComponent,
    IconButtonComponent, LoaderComponent, LogosComponent, MarkerComponent, RadioButtonGroupComponent, TabsComponent, PopupComponent,
    UnderConstructionComponent, TextInputComponent, PrintComponent, S4SelectComponent, CategoryBarComponent, TooltipComponent, ReportWrapperComponent
} from './components';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MenusModule } from '@progress/kendo-angular-menu';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { ExcelModule, GridModule, PDFModule } from '@progress/kendo-angular-grid';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { TreeViewModule } from '@progress/kendo-angular-treeview';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { TooltipModule } from '@progress/kendo-angular-tooltip';
import { RequestStatusPipe, RequestTypePipe, OrderByPipe, ApproveRejectTypePipe, ReportAccessPipe } from './pipes';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { PDFExportModule } from '@progress/kendo-angular-pdf-export';
import { PopupModule } from '@progress/kendo-angular-popup';
import { ExcelExportModule } from '@progress/kendo-angular-excel-export';

let modules = [
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,

    // Kendo Module Imports
    ButtonsModule,
    DateInputsModule,
    DropDownsModule,
    ExcelModule,
    ExcelExportModule,
    GridModule,
    InputsModule,
    LayoutModule,
    MenusModule,
    PDFModule,
    PDFExportModule,
    PopupModule,
    TooltipModule,
    TreeViewModule,

    // Angular Bootstrap
    NgbModule
];

let components = [
    ButtonGroupComponent,
    CardComponent,
    CategoryBarComponent,
    ChartComponent,
    CheckboxGroupComponent,
    FilterCardComponent,
    IconButtonComponent,
    LoaderComponent,
    LogosComponent,
    MarkerComponent,
    PopupComponent,
    PrintComponent,
    RadioButtonGroupComponent,
    ReportComponent,
    ReportWrapperComponent,
    S4SelectComponent,
    TabsComponent,
    TextInputComponent,
    ThumbnailComponent,
    ThumbnailsContainerComponent,
    TooltipComponent,
    UnderConstructionComponent
];

let directives = [
    AwaitsClickOutsideDirective,
    CustomCheckDirective
];

let pipes = [
    RequestStatusPipe,
    RequestTypePipe,
    OrderByPipe,
    ApproveRejectTypePipe,
    ReportAccessPipe
];

@NgModule({
    imports: modules,
    declarations: [
        ...components,
        ...directives,
        ...pipes
    ],
    exports: [
        ...modules,
        ...components,
        ...directives,
        ...pipes
    ]
})
export class SharedModule { }

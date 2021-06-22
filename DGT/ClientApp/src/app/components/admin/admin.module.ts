import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PoolQueryComponent } from './pool-query/pool-query.component';
import { PoolAssignmentDialogComponent } from './pool-assignment-dialog/pool-assignment-dialog.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DatagridComponent } from './datagrid/datagrid.component';
import { AdminComponent } from './admin/admin.component';
import { AdminRoutingModule } from './admin-routing.module';



@NgModule({
  declarations: [
    PoolQueryComponent,
    PoolAssignmentDialogComponent,
    DashboardComponent,
    DatagridComponent,
    AdminComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule {}

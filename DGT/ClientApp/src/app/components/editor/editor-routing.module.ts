import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditorComponent } from './editor/editor.component';

const editorRoutes: Routes = [
  { path: '', component: EditorComponent, data: {} }
];

@NgModule({
  imports: [
    RouterModule.forChild(editorRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class EditorRoutingModule {}

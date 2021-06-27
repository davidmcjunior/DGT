import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () => import('app/components/admin/admin.module').then(m => m.AdminModule)
      .catch( err => console.log('Oh no!', err) ),
    canLoad: []
  },
  {
    path: 'editor',
    loadChildren: () => import('app/components/editor/editor.module').then(m => m.EditorModule)
      .catch( err => console.log('Oh no!', err) ),
    canLoad: []
  },
  {
    path: '',
    redirectTo: 'editor',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SingerComponent } from './singer/singer.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
    { path: '', redirectTo: 'singer', pathMatch: 'full'},
    { path: 'singer', component: SingerComponent },
    { path: 'admin', component: AdminComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
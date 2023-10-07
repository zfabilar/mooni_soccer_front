import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './login/login.component'
import {PresidenteComponent} from './presidente/presidente.component'
import {RepresentanteComponent} from './representante/representante.component'
import {AdminComponent} from './admin/admin.component'
const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'login', component: LoginComponent},
  {path: 'mi-liga', component: PresidenteComponent},
  {path: 'mi-equipo', component: RepresentanteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

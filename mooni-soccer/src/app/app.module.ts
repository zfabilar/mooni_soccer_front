import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { LunaComponent } from './luna/luna.component';
import { PresidenteComponent } from './presidente/presidente.component';
import { RepresentanteComponent } from './representante/representante.component';
import { AdminComponent } from './admin/admin.component';
import { MenuPresiComponent } from './menu-presi/menu-presi.component';
import { MenuAdminComponent } from './menu-admin/menu-admin.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LunaComponent,
    PresidenteComponent,
    RepresentanteComponent,
    AdminComponent,
    MenuPresiComponent,
    MenuAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

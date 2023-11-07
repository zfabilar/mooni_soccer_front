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
import { MenuEquipoComponent } from './equipos/menu-equipo/menu-equipo.component';
import { MainComponent } from './equipos/main/main.component';
import { CrearEquipoComponent } from './equipos/crear-equipo/crear-equipo.component';
import { VerEquiposComponent } from './equipos/ver-equipos/ver-equipos.component';
import { MainPartidosComponent } from './partidos/main-partidos/main-partidos.component';
import { CrearPartidoComponent } from './partidos/crear-partido/crear-partido.component';
import { VerPartidosComponent } from './partidos/ver-partidos/ver-partidos.component';
import { MenuPartidosComponent } from './partidos/menu-partidos/menu-partidos.component';
import { CrearJornadaComponent } from './jornadas/crear-jornada/crear-jornada.component';
import { CrearDivisionComponent } from './divisiones/crear-division/crear-division.component';
import { CrearArbitrosComponent } from './arbitros/crear-arbitros/crear-arbitros.component';
import { VerTablaComponent } from './temporadas/ver-tabla/ver-tabla.component';
import { MenuHomeComponent } from './home/menu-home/menu-home.component';
import { MainHomeComponent } from './home/main-home/main-home.component';
import { CrearRepresentanteComponent } from './representante/crear-representante/crear-representante.component';
import { VerJugadoresComponent } from './jugadores/ver-jugadores/ver-jugadores.component';
import { VerJugadoresModalComponent } from './modales/ver-jugadores-modal/ver-jugadores-modal.component';
import { CrearRepresentanteModalComponent } from './modales/crear-representante-modal/crear-representante-modal.component';
import { CrearJugadorComponent } from './jugadores/crear-jugador/crear-jugador.component';
import { CrearJugadorModalComponent } from './modales/crear-jugador-modal/crear-jugador-modal.component';
import { CrearEquipoModalComponent } from './modales/crear-equipo-modal/crear-equipo-modal.component';
import { CrearPartidoModalComponent } from './modales/crear-partido-modal/crear-partido-modal.component';
import { CedulaComponent } from './partidos/cedula/cedula.component';
import { CedulaModalComponent } from './modales/cedula-modal/cedula-modal.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LunaComponent,
    PresidenteComponent,
    RepresentanteComponent,
    AdminComponent,
    MenuPresiComponent,
    MenuAdminComponent,
    MenuEquipoComponent,
    MainComponent,
    CrearEquipoComponent,
    VerEquiposComponent,
    MainPartidosComponent,
    CrearPartidoComponent,
    VerPartidosComponent,
    MenuPartidosComponent,
    CrearJornadaComponent,
    CrearDivisionComponent,
    CrearArbitrosComponent,
    VerTablaComponent,
    MenuHomeComponent,
    MainHomeComponent,
    CrearRepresentanteComponent,
    VerJugadoresComponent,
    VerJugadoresModalComponent,
    CrearRepresentanteModalComponent,
    CrearJugadorComponent,
    CrearJugadorModalComponent,
    CrearEquipoModalComponent,
    CrearPartidoModalComponent,
    CedulaComponent,
    CedulaModalComponent
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

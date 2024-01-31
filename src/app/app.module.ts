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
import { MenuDivisionesComponent } from './divisiones/menu-divisiones/menu-divisiones.component';
import { MainDivisionesComponent } from './divisiones/main-divisiones/main-divisiones.component';
import { VerDivisionesComponent } from './divisiones/ver-divisiones/ver-divisiones.component';
import { CrearDivisionModalComponent } from './modales/crear-division-modal/crear-division-modal.component';
import { VerEquiposModalComponent } from './modales/ver-equipos-modal/ver-equipos-modal.component';
import { MainArbitrosComponent } from './arbitros/main-arbitros/main-arbitros.component';
import { MenuArbitrosComponent } from './arbitros/menu-arbitros/menu-arbitros.component';
import { VerArbitrosComponent } from './arbitros/ver-arbitros/ver-arbitros.component';
import { CrearArbitroModalComponent } from './modales/crear-arbitro-modal/crear-arbitro-modal.component';
import { CrearTemporadaComponent } from './temporadas/crear-temporada/crear-temporada.component';
import { TerminaTemporadaComponent } from './modales/termina-temporada/termina-temporada.component';
import { VerRepresentantesComponent } from './representante/ver-representantes/ver-representantes.component';
import { SelectDivisionComponent } from './modales/select-division/select-division.component';
import { CerrarSesionComponent } from './modales/cerrar-sesion/cerrar-sesion.component';
import { InformacionModalComponent } from './modales/informacion-modal/informacion-modal.component';


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
    CedulaModalComponent,
    MenuDivisionesComponent,
    MainDivisionesComponent,
    VerDivisionesComponent,
    CrearDivisionModalComponent,
    VerEquiposModalComponent,
    MainArbitrosComponent,
    MenuArbitrosComponent,
    VerArbitrosComponent,
    CrearArbitroModalComponent,
    CrearTemporadaComponent,
    TerminaTemporadaComponent,
    VerRepresentantesComponent,
    SelectDivisionComponent,
    CerrarSesionComponent,
    InformacionModalComponent
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

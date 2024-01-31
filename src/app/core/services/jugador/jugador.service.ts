import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http/'
import {constantes} from '../../constantes'
import { JugadorResponse } from '../../models/jugadoresResponse.models';
import { Jugador } from '../../models/jugador.models';
@Injectable({
  providedIn: 'root'
})
export class JugadorService {

  constructor(private http: HttpClient) { }

  jugadoresLibres(){
    var idLiga = (typeof localStorage.getItem("idLiga") == null) ? '0':localStorage.getItem("idLiga")?.valueOf()

    var sesion = (typeof localStorage.getItem("sesion") == null) ? '0':localStorage.getItem("sesion")?.valueOf()
    return this.http.post<JugadorResponse>(constantes.URL_API+'jugador/lista/libres',{
        "idsesion":parseInt( sesion == undefined ? '0':sesion),
        "idliga":parseInt( idLiga == undefined ? '0':idLiga)
      }
    );
  }
  jugadoresEquipo(idEquipo:number|null){
    var sesion = (typeof localStorage.getItem("sesion") == null) ? '0':localStorage.getItem("sesion")?.valueOf()
    return this.http.post<JugadorResponse>(constantes.URL_API+'jugador/lista/porEquipo',{
        "idsesion":parseInt( sesion == undefined ? '0':sesion),
        "idEquipo":idEquipo
      }
    );
  }
  crearJugador(jugador: Jugador){
    var idLiga = (typeof localStorage.getItem("idLiga") == null) ? '0':localStorage.getItem("idLiga")?.valueOf()
    var sesion = (typeof localStorage.getItem("sesion") == null) ? '0':localStorage.getItem("sesion")?.valueOf()
    return this.http.post<JugadorResponse>(constantes.URL_API+'jugador',{
        "idsesion":parseInt( sesion == undefined ? '0':sesion),
        "nombre":jugador.nombrecompleto,
        "numeroPlayera": jugador.numeroplayera.toString(),
        "idEquipo" : jugador.idequipo,
        "idliga":parseInt( idLiga == undefined ? '0':idLiga)
      }
    );
  }
  liberarJugadores(jugadores:number[]){
    var sesion = (typeof localStorage.getItem("sesion") == null) ? '0':localStorage.getItem("sesion")?.valueOf()
    return this.http.put<JugadorResponse>(constantes.URL_API+'jugador/liberar/varios',{
        "idsesion":parseInt( sesion == undefined ? '0':sesion),
        "jugadores":jugadores
      }
    );
  }
  updateJugador(jugador: Jugador){
    var sesion = (typeof localStorage.getItem("sesion") == null) ? '0':localStorage.getItem("sesion")?.valueOf()
    return this.http.put<JugadorResponse>(constantes.URL_API+'jugador',{
        "idsesion":parseInt( sesion == undefined ? '0':sesion),
        "idjugador":jugador.idjugador,
        "numeroplayera": jugador.numeroplayera,
        "idequipo" : jugador.idequipo,
        "activo" : jugador.activo,
        "estatus" : jugador.estatus
      }
    );
  }
  /*creaJornada(nombre:string,idTemporada:number,fechaInicio:string,fechaFin:string){
    var sesion = (typeof localStorage.getItem("sesion") == null) ? '0':localStorage.getItem("sesion")?.valueOf()
    return this.http.post<Jornada>(constantes.URL_API+'jornada',{
      "idsesion":parseInt( sesion == undefined ? '0':sesion),
      "nombrejornada":nombre,
      "idtemporada":idTemporada,
      "fechainicio": fechaInicio,
      "fechafin": fechaFin
    }
  );
  }*/

}

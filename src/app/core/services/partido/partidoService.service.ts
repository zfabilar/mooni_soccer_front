import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http/'
import {constantes} from '../../constantes'
import { Partido } from '../../models/partido.model';
import { PartidosResposne } from '../../models/partidosResponse.models';
import { PartidosTotalResponse } from '../../models/partidosTotalResponse.models';
import { AsistenciaResponse } from '../../models/asistenciasResponse.models';
@Injectable({
  providedIn: 'root'
})
export class PartidoService {

  constructor(private http: HttpClient) { }

  creaPartido(partido:Partido){
    var sesion = (typeof localStorage.getItem("sesion") == null) ? '0':localStorage.getItem("sesion")?.valueOf()
    return this.http.post<PartidosResposne>(constantes.URL_API+'partido',{
        "idsesion":parseInt( sesion == undefined ? '0':sesion),
        idjornada: partido.idjornada,
        idtemporada:partido.idtemporada,
        idlocal:partido.idlocal,
        idvisitante:partido.idvisitante,
        fecha:partido.fecha,
        hora:partido.hora,
        idcancha:partido.cancha,
        idarbitro:partido.idarbitro,
        tipopartido:partido.idtipopartido
      }
    );
  }
  obtenerPartidos(idJornada:number){
    //jornada
    var sesion = (typeof localStorage.getItem("sesion") == null) ? '0':localStorage.getItem("sesion")?.valueOf()
    return this.http.post<PartidosTotalResponse>(constantes.URL_API+'partido/jornada',{
        "idsesion":parseInt( sesion == undefined ? '0':sesion),
        idjornada: idJornada
      }
    );
  }
  updateDatosPartido(partido:Partido){
    var sesion = (typeof localStorage.getItem("sesion") == null) ? '0':localStorage.getItem("sesion")?.valueOf()
    return this.http.put<PartidosResposne>(constantes.URL_API+'partido/datos',{
        "idsesion":parseInt( sesion == undefined ? '0':sesion),
        idpartido: partido.idpartido,
        fecha:partido.fecha,
        hora:partido.hora,
        cancha:partido.cancha,
        idarbitro:partido.idarbitro,
        idtipopartido:partido.idtipopartido,
        activo:partido.activo,
        idjornada:partido.idjornada,
        idtemporada: partido.idtemporada
      }
    );
  }
  cedulaPartido(partido:Partido,jugLocal:any,jugVisitante:any,goleslocalShootout:number,golesvisitanteShootout:number){
    var sesion = (typeof localStorage.getItem("sesion") == null) ? '0':localStorage.getItem("sesion")?.valueOf()
    return this.http.put<PartidosResposne>(constantes.URL_API+'partido/resultado',{
        "idsesion":parseInt( sesion == undefined ? '0':sesion),
        idpartido: partido.idpartido,
        idtemporada: partido.idtemporada,
        goleslocal: partido.goleslocal,
        golesvisitante:partido.golesvisitante,
        golesvisitanteShootout:golesvisitanteShootout,
        goleslocalShootout:goleslocalShootout,
        idvisitante:partido.idvisitante,
        idlocal:partido.idlocal,
        jugLocal: jugLocal,
        jugVisitante:jugVisitante
      }
    );
  }
  obtenerAsistencias(idPartido:number){
    var sesion = (typeof localStorage.getItem("sesion") == null) ? '0':localStorage.getItem("sesion")?.valueOf()
    return this.http.post<AsistenciaResponse>(constantes.URL_API+'partido/asistencias',{
        "idsesion":parseInt( sesion == undefined ? '0':sesion),
        idPartido: idPartido
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

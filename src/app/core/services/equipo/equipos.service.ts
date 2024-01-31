import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http/'
import { Equipo } from '../../models/equipo.models';
import { EquipoResponse } from '../../models/equipoResponse.models';
import {constantes} from '../../constantes'
@Injectable({
  providedIn: 'root'
})
export class EquiposService {

  constructor(private http: HttpClient) { }

  obtieneEquipos(iddivision:number){
    var sesion = (typeof localStorage.getItem("sesion") == null) ? '0':localStorage.getItem("sesion")?.valueOf()
    return this.http.post<EquipoResponse>(constantes.URL_API+'equipo/lista',{
        "idsesion":parseInt( sesion == undefined ? '0':sesion),
        "idDivision":iddivision
      }
    );
  }
  /*actualizaArbitros(idsesion:number,,equipo:Equipo){
    return this.http.put<Equipo>(constantes.URL_API+'arbitro',{
      "idsesion":idsesion,
      "idarbitro":idArbitro,
      "telefono":telefono,
      "activo":activo
    }
  );
  }*/
  actualizaEquipo(equipo:Equipo){

    var sesion = (typeof localStorage.getItem("sesion") == null) ? '0':localStorage.getItem("sesion")?.valueOf()
    return this.http.put<EquipoResponse>(constantes.URL_API+'equipo',{
      "idsesion":parseInt( sesion == undefined ? '0':sesion),
      idequipo:equipo.idequipo,
      nombreEquipo: equipo.nombre,
      colorPlayera : equipo.colorplayera,
      idDivision: equipo.iddivision,
      idRepresentante: equipo.idrepresentante,
      activo:equipo.activo
    }
  );
  }
  creaEquipo(equipo:Equipo){

    var sesion = (typeof localStorage.getItem("sesion") == null) ? '0':localStorage.getItem("sesion")?.valueOf()
    return this.http.post<EquipoResponse>(constantes.URL_API+'equipo',{
      "idsesion":parseInt( sesion == undefined ? '0':sesion),
      nombreEquipo: equipo.nombre,
      colorPlayera : equipo.colorplayera,
      idDivision: equipo.iddivision,
      idRepresentante: equipo.idrepresentante
    }
  );
  }

}

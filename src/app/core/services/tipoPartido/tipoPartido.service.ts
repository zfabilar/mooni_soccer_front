import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http/'
import { TipoPartidos } from '../../models/tipoPartidos.models';
import {constantes} from '../../constantes'
@Injectable({
  providedIn: 'root'
})
export class TipoPartidoService {

  constructor(private http: HttpClient) { }

  obtieneTipos(){
    var sesion = (typeof localStorage.getItem("sesion") == null) ? '0':localStorage.getItem("sesion")?.valueOf()
    return this.http.post<TipoPartidos>(constantes.URL_API+'tipopartido/lista',{
        "idsesion":parseInt( sesion == undefined ? '0':sesion)
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

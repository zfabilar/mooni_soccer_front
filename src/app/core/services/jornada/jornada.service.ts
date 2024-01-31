import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http/'
import { Jornada } from '../../models/jornada.models';
import {constantes} from '../../constantes'
@Injectable({
  providedIn: 'root'
})
export class JornadaService {

  constructor(private http: HttpClient) { }

  obtieneJornadas(){
    var sesion = (typeof localStorage.getItem("sesion") == null) ? '0':localStorage.getItem("sesion")?.valueOf()
    var temporada = (typeof localStorage.getItem("temporada") == null) ? '0':localStorage.getItem("temporada")?.valueOf()
    return this.http.post<Jornada>(constantes.URL_API+'jornada/lista',{
        "idsesion":parseInt( sesion == undefined ? '0':sesion),
        "idtemporada":parseInt( temporada == undefined ? '0':temporada)
      }
    );
  }
  creaJornada(nombre:string,idTemporada:number,fechaInicio:string,fechaFin:string){
    var sesion = (typeof localStorage.getItem("sesion") == null) ? '0':localStorage.getItem("sesion")?.valueOf()
    return this.http.post<Jornada>(constantes.URL_API+'jornada',{
      "idsesion":parseInt( sesion == undefined ? '0':sesion),
      "nombrejornada":nombre,
      "idtemporada":idTemporada,
      "fechainicio": fechaInicio,
      "fechafin": fechaFin
    }
  );
  }

}

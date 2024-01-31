import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http/'
import {constantes} from '../../constantes'
import { EstadisticasResponse } from '../../models/estadisticasResponse.models';
@Injectable({
  providedIn: 'root'
})
export class EstadisticasService {

  constructor(private http: HttpClient) { }

  obtieneTG(){
    var sesion = (typeof localStorage.getItem("sesion") == null) ? '0':localStorage.getItem("sesion")?.valueOf()
    var temporada = (typeof localStorage.getItem("temporada") == null) ? '0':localStorage.getItem("temporada")?.valueOf()
    return this.http.post<EstadisticasResponse>(constantes.URL_API+'estaditicas/temporada',{
        "idsesion":parseInt( sesion == undefined ? '0':sesion),
        "idtemporada":parseInt( temporada == undefined ? '0':temporada)
      }
    );
  }

}

import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http/'
import {Division} from '../../models/division.model'
import {constantes} from '../../constantes'
@Injectable({
  providedIn: 'root'
})
export class DivisionService {

  constructor(private http: HttpClient) { }

  obtieneDivisiones(idLiga:number){
    var sesion = (typeof localStorage.getItem("sesion") == null) ? '0':localStorage.getItem("sesion")?.valueOf()
    return this.http.post<Division>(constantes.URL_API+'division/ByLiga',{
        "idLiga" : idLiga,
        "idsesion":parseInt( sesion == undefined ? '0':sesion)
      }
    );
  }
  crearDivision(idliga: number,nombre:string,idSesion:number){
    return this.http.post<Division>(constantes.URL_API+'division/',{
      "idLiga" : idliga,
      "nombreLiga": nombre,
      "idsesion":idSesion
    }
  );
  }


}

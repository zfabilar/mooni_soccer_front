import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http/'
import { Cancha } from '../../models/cancha.models';
import { Canchas } from '../../models/canchas.models';
import {constantes} from '../../constantes'
@Injectable({
  providedIn: 'root'
})
export class CanchasService {

  constructor(private http: HttpClient) { }

  obtieneCanchas(idliga:number){
    var sesion = (typeof localStorage.getItem("sesion") == null) ? '0':localStorage.getItem("sesion")?.valueOf()
    return this.http.post<Canchas>(constantes.URL_API+'cancha/lista/liga',{
        "idsesion":parseInt( sesion == undefined ? '0':sesion),
        "idliga":idliga
      }
    );
  }
  actualizaCancha(idArbitro:number,telefono:string,activo:boolean){
    var sesion = (typeof localStorage.getItem("sesion") == null) ? '0':localStorage.getItem("sesion")?.valueOf()
    return this.http.put<Cancha>(constantes.URL_API+'cancha',{
      "idsesion":parseInt( sesion == undefined ? '0':sesion),
      "idarbitro":idArbitro,
      "telefono":telefono,
      "activo":activo
    }
  );
  }
  creaCancha(nombre:string,telefono:string,idliga:number){
    var sesion = (typeof localStorage.getItem("sesion") == null) ? '0':localStorage.getItem("sesion")?.valueOf()
    return this.http.post<Cancha>(constantes.URL_API+'cancha',{
      "idsesion":parseInt( sesion == undefined ? '0':sesion),
      "nombre":nombre,
      "telefono":telefono,
      "idLiga": idliga
    }
  );
  }

}

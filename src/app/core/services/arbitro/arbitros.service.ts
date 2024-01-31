import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http/'
import { ArbitroModel } from '../../models/arbitros.models';
import {constantes} from '../../constantes'
@Injectable({
  providedIn: 'root'
})
export class ArbitrosService {

  constructor(private http: HttpClient) { }

  obtieneArbitros(idliga:number){
    var sesion = (typeof localStorage.getItem("sesion") == null) ? '0':localStorage.getItem("sesion")?.valueOf()
    return this.http.post<ArbitroModel>(constantes.URL_API+'arbitro/lista/liga',{
        "idsesion":parseInt( sesion == undefined ? '0':sesion),
        "idliga":idliga
      }
    );
  }
  actualizaArbitros(idArbitro:number,telefono:string,activo:boolean){
    var sesion = (typeof localStorage.getItem("sesion") == null) ? '0':localStorage.getItem("sesion")?.valueOf()
    return this.http.put<ArbitroModel>(constantes.URL_API+'arbitro',{
      "idsesion":parseInt( sesion == undefined ? '0':sesion),
      "idarbitro":idArbitro,
      "telefono":telefono,
      "activo":activo
    }
  );
  }
  creaArbitros(nombre:string,telefono:string,idliga:number){
    var sesion = (typeof localStorage.getItem("sesion") == null) ? '0':localStorage.getItem("sesion")?.valueOf()
    return this.http.post<ArbitroModel>(constantes.URL_API+'arbitro',{
      "idsesion":parseInt( sesion == undefined ? '0':sesion),
      "nombre":nombre,
      "telefono":telefono,
      "idLiga": idliga
    }
  );
  }

}

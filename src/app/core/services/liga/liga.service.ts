import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http/'
import {Liga} from '../../models/liga.model'
import { ListaLigas } from '../../models/ligas.model';
import { ResponseModel } from '../../models/response.model';
import {constantes} from '../../constantes'
@Injectable({
  providedIn: 'root'
})
export class LigaService {

  constructor(private http: HttpClient) { }
  ligaByPK(idliga:number,idsesion:number){
    return this.http.post<Liga>(constantes.URL_API+'liga/get',
    {
      "idliga": idliga,
      "idsesion":idsesion
    }
    );
  }
  listaLigas(idsesion:number){
    return this.http.post<ListaLigas>(constantes.URL_API+'liga/lista',
    {
      "idsesion":idsesion
    }
    );
  }
  actualizaliga(idliga : number,nombre : string,estatus : number,idsesion:number){
    return this.http.put<ResponseModel>(constantes.URL_API+'liga/',
    {
      "idliga" : idliga,
      "nombre" : nombre,
      "estatus" : estatus,
      "idsesion":idsesion
    }
    );
  }
  crearLiga(nombre : string,idsesion:number,cantidadmaxequipos:number,fechaFinMemb:string){
    return this.http.post<ResponseModel>(constantes.URL_API+'liga/',
    {
        "nombreliga" : nombre,
        "fechafin":fechaFinMemb,
        "cantmaxequipos" : cantidadmaxequipos,
        "idsesion":idsesion
    }
    );
  }

}

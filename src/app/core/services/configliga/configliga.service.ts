import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http/'
import {configLiga} from '../../models/configLiga.model'
import {constantes} from '../../constantes'
@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor(private http: HttpClient) { }

  obtieneConfiguracion(idsesion:number,idliga:number){
    return this.http.post<configLiga>(constantes.URL_API+'configliga/get',{
        "idsesion":idsesion,
        "idliga":idliga
      }
    );
  }
  updateConfiguracion(idsesion:number,idconfig:number,mxEquipos:number,inicioMemb:string,finMemb:string,maxPlyers:number){
    return this.http.put<configLiga>(constantes.URL_API+'configliga',
      {
        "idsesion":idsesion,
        "idconfig":idconfig,
        "cantidadmaxequipos": mxEquipos,
        "fechainiciomembresia" : inicioMemb,
        "fechafinmembresia": finMemb,
        "cantmaxplayersbyteam": maxPlyers
      }
    );
  }

}

import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http/'
import { Temporada } from '../../models/temporada.model';
import {constantes} from '../../constantes';

@Injectable({
  providedIn: 'root'
})
export class TemporadaService {

  constructor(private http: HttpClient) { }
  obtenerTemporada(idliga:number,idsesion:number){
    return this.http.post<Temporada>(constantes.URL_API+'temporada/get',{
      "idliga" : idliga,
      "idsesion":idsesion
    }
  );
  }
  crearTemporada(idliga:number,nombre:string,idsesion:number){
    return this.http.post<Temporada>(constantes.URL_API+'temporada/',{
      "idliga" : idliga,
      "idsesion":idsesion,
      "nombre": nombre
    }
    );
  }


}

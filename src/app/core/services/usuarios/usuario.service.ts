import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http/'
import {Representante} from '../../models/representante.model'
import {Md5} from "md5-typescript";
import {constantes} from '../../constantes'
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }
  listaRepresentantes(idliga:number){
    var sesion = (typeof localStorage.getItem("sesion") == null) ? '0':localStorage.getItem("sesion")?.valueOf()
    return this.http.post<{mensaje: string,exito:boolean,data: Representante[]}>(constantes.URL_API+'usuario/lista/representantes',{
      "idsesion":parseInt( sesion == undefined ? '0':sesion),
    "idliga": idliga
  })
  }
  cambiaRol(id_usuario:number,rol:string){
    return this.http.put<{mensaje: string,exito: boolean}>(constantes.URL_API+"usuario/activo",{"id_us":id_usuario,"new_rol":rol})
  }
  crearUsuario(nickname:string,pass: string,tipo: number,nombrecompleto : string,idliga: number,telefono: string){
    var sesion = (typeof localStorage.getItem("sesion") == null) ? '0':localStorage.getItem("sesion")?.valueOf()
    return this.http.post<{mensaje: string,exito: boolean}>(constantes.URL_API+"usuario",{
      "idsesion":parseInt( sesion == undefined ? '0':sesion),
    "nickname" : nickname,
    "pass": pass,
    "tipo": tipo,
    "nombrecompleto" : nombrecompleto,
    "idliga": idliga,
    "telefono": telefono})
  }
  liberaRep(idUsuario:number){
    var sesion = (typeof localStorage.getItem("sesion") == null) ? '0':localStorage.getItem("sesion")?.valueOf()
    return this.http.post<{mensaje: string,exito: boolean}>(constantes.URL_API+"usuario/representante/libera",{"id_us":idUsuario,"idsesion":parseInt( sesion == undefined ? '0':sesion)})
  }
  actualizaTelefono(idUsuario:number,telefono:string,tipo:number){
    var sesion = (typeof localStorage.getItem("sesion") == null) ? '0':localStorage.getItem("sesion")?.valueOf()
    return this.http.put<{mensaje: string,exito: boolean}>(constantes.URL_API+"usuario/telefono",{"id_us":idUsuario,"idsesion":parseInt( sesion == undefined ? '0':sesion),"telefono":telefono,"tipo":tipo})
  }
}

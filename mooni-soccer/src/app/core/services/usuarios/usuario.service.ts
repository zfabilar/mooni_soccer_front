import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http/'
import {Usuario} from '../../models/usuario.model'
import {Md5} from "md5-typescript";
import {constantes} from '../../constantes'
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }
  listaUsuarios(){
    return this.http.get<{mensaje: string,exito:boolean,data: Usuario[]}>(constantes.URL_API+'usuario/lista')
  }
  cambiaRol(id_usuario:number,rol:string){
    return this.http.put<{mensaje: string,exito: boolean}>(constantes.URL_API+"usuario/activo",{"id_us":id_usuario,"new_rol":rol})
  }
  crearUsuario(usr:string,pss:string,rol:string){
    return this.http.post<{mensaje: string,exito: boolean}>(constantes.URL_API+"usuario",{"nombre":usr,"pss": Md5.init(pss),"rol":rol})
  }
}

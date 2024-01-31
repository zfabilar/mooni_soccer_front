import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http/'
import {Md5} from "md5-typescript";
import {login} from '../../models/login.model'
import {constantes} from '../../constantes'
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  logeaUsuario(usr:string,pss:string){
    return this.http.post<login>(constantes.URL_API+'login/autenticar', {'nickname' : usr, 'pass' : pss,"login"  :true});
  }
  cierraSesion(idsesion:number){
    return this.http.post<login>(constantes.URL_API+'login/terminaSesion', {"idsesion": idsesion});
  }
  wp(){
    return this.http.get<login>(constantes.URL_API+'login/wp');
  }

}

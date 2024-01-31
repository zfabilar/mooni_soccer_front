import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http/'
import { Temporada } from '../../models/temporada.model';
import {constantes} from '../../constantes';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor(private http: HttpClient) { }
  mataSesion(mensje:string){
    alert(mensje)
        localStorage.clear()
        location.href = "/login"
  }
  generatePassword(length: number): string {
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_-+=<>?";
    let password = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      password += charset.charAt(randomIndex);
    }
    return password;
  }
  generateUser(nombre:string){
    var fs = nombre.indexOf(" ",0)
    var us = nombre.indexOf(" ",fs+1)
    var usr =nombre.replace(/\s/g, '');;
    if(us ==fs){
      us = usr.length
    }
    console.log(fs,us)
    return (usr[0] + usr.slice(fs,us)).toLowerCase();//+(usr[us]==undefined?"":usr[us-1]);
  }
  desActivaModal(nombre:string){
    ($("#"+nombre) as any).modal('hide')
  }
  activaModal(nombre:string){
    ($("#"+nombre) as any).modal('hide')
  }



}

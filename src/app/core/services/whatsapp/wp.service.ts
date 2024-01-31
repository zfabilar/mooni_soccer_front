import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http/'

import {constantes} from '../../constantes'

@Injectable({
  providedIn: 'root'
})
export class WPService {
   options = {
    idsesion: 0,
    method: "POST",
    url: "https://api.ultramsg.com/instance68324/messages/chat",
    headers: {"content-type": "application/x-www-form-urlencoded"},
    form: {
      token: "6cx1pljfw746ukt4",
      to: "",
      body: "",
      priority:10,
      referenceId: ""
    }
  };
  constructor(private http: HttpClient) { }

  enviarMensaje(mensaje: string,destiny:string) {
    var sesion = (typeof localStorage.getItem("sesion") == null) ? '0':localStorage.getItem("sesion")?.valueOf()
    this.options.idsesion = parseInt( sesion == undefined ? '0':sesion)
    this.options.form.body = mensaje
    this.options.form.to = destiny
    return this.http.post< {mensaje: string,exito:boolean} >(constantes.URL_API+'whatsapp/enviar-mensaje',
    this.options)
  }



}

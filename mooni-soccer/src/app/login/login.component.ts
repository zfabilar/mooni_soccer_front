import { Component, OnInit } from '@angular/core';
import {LoginService} from '../core/services/login/login.service'
import {login} from '../core/models/login.model'
import { NavigationExtras, Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css','./login.component_2.css']
})
export class LoginComponent implements OnInit {
  constructor(private loginService : LoginService, public router: Router) { }
  mensaje : string = ""
  usuario : string = "";
  pss : string = ""
  espera: boolean =false
  ngOnInit(): void {
  }
  login(){
    this.espera = true
    this.loginService.logeaUsuario(this.usuario,this.pss).subscribe( (data : login) =>  {
      console.log(data)
       if(data.autentica){
        localStorage.setItem('user', this.usuario);
        localStorage.setItem('id',data.idUsuario + "")
        localStorage.setItem('rol',data.rol)
        localStorage.setItem('sesion',data.idSesion+"")
        localStorage.setItem('idLiga',data.idLiga+"")

        const navigationExtras: NavigationExtras = {
          queryParamsHandling: 'preserve',
          preserveFragment: true
        };
        var redirectUrl = ''
        switch(parseInt(data.rol)){
          case 1:
            redirectUrl = "/admin";
          break;
          case 2:
            redirectUrl = "/mi-liga";
          break;
          case 3:
            redirectUrl = "/mi-equipo";
          break;
        }
          console.log(redirectUrl)
         this.espera = false
         this.router.navigate([redirectUrl], navigationExtras);
       }else{
        this.espera = false
        this.mensaje = "Datos incorrectos o suscripción finalizada"
       }
    })
    //  console.log(this.loginService.logeaUsuario(this.usuario,this.pss))
  }
}


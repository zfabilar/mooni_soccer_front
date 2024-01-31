import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/core/services/login/login.service';

@Component({
  selector: 'app-cerrar-sesion',
  templateUrl: './cerrar-sesion.component.html',
  styleUrls: ['./cerrar-sesion.component.css']
})
export class CerrarSesionComponent implements OnInit {

  constructor(private loginServ:LoginService) { }

  ngOnInit(): void {
  }
  cerrarSesion(){
    var id = (typeof localStorage.getItem("sesion") == null) ? '0':localStorage.getItem("sesion")?.valueOf()
    this.loginServ.cierraSesion(parseInt(id == undefined ? '0':id)).subscribe((data:any  )=>{
      if(data.exito){
        localStorage.clear();
        location.href = "/login"
      }
    })
  }

}

import { Component, OnInit ,Output,EventEmitter} from '@angular/core';
import {LoginService} from '../core/services/login/login.service'
@Component({
  selector: 'app-menu-presi',
  templateUrl: './menu-presi.component.html',
  styleUrls: ['./menu-presi.component.css']
})
export class MenuPresiComponent implements OnInit {
  @Output()  newItemEvent = new EventEmitter<string>();
  constructor(private loginServ:LoginService) { }

  ngOnInit(): void {
  }
  cambiaOpc(opc: string){
    this.newItemEvent.emit(opc);
  }
  cierraSes(){
    var id = (typeof localStorage.getItem("sesion") == null) ? '0':localStorage.getItem("sesion")?.valueOf()
    this.loginServ.cierraSesion(parseInt(id == undefined ? '0':id)).subscribe((data:any  )=>{
      if(data.exito){
        alert("Hasta luego!")
        localStorage.clear();
        location.href = "/login"
      }
    })
  }
}

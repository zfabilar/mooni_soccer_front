import { Component, OnInit,EventEmitter,Output } from '@angular/core';
import { TemporadaService } from '../../core/services/temporada/temporada.service';
import { Temporada } from 'src/app/core/models/temporada.model';
import { UtilsService } from '../../core/services/utils/utils.service';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-crear-temporada',
  templateUrl: './crear-temporada.component.html',
  styleUrls: ['./crear-temporada.component.css']
})
export class CrearTemporadaComponent implements OnInit {
  nombre:string=""
  espera:boolean=false
  mensaje:string=""

  @Output() messageEvent = new EventEmitter<string>();
  @Output() esperaEvent = new EventEmitter<boolean>();



  sendMessage() {
    this.messageEvent.emit(this.mensaje);
  }
  eventChange(){
    this.espera=!this.espera
    this.esperaEvent.emit(this.espera);
  }


  idLiga = (typeof localStorage.getItem("idLiga") == null) ? '0':localStorage.getItem("idLiga")?.valueOf()
  sesion = (typeof localStorage.getItem("sesion") == null) ? '0':localStorage.getItem("sesion")?.valueOf()
  constructor(private tempporadaServ: TemporadaService, private utilsServ: UtilsService, public router: Router) {}

  ngOnInit(): void {
    this.idLiga = (typeof localStorage.getItem("idLiga") == null) ? '0':localStorage.getItem("idLiga")?.valueOf()
    this.sesion = (typeof localStorage.getItem("sesion") == null) ? '0':localStorage.getItem("sesion")?.valueOf()
  }
  activaModal(){
    this.sendMessage();
    ($("#infoModal") as any).modal('show')
  }
  crearTemporada(){
    this.eventChange()
    this.tempporadaServ.crearTemporada(parseInt( this.idLiga == undefined ? '0':this.idLiga),this.nombre,parseInt( this.sesion == undefined ? '0':this.sesion))
    .subscribe((data:Temporada)=>{
      this.mensaje = data.mensaje;
      this.activaModal()
        this.nombre = ""
      },
      (error:any)=>{
        if(error.status == 403){
          this.sendMessage()
          this.utilsServ.mataSesion("Sesión no válida")
        }

    });
  }

}

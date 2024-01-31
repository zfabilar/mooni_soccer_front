import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { JornadaService } from 'src/app/core/services/jornada/jornada.service';
import { Jornada } from 'src/app/core/models/jornada.models';
import { UtilsService } from 'src/app/core/services/utils/utils.service';
@Component({
  selector: 'app-crear-jornada',
  templateUrl: './crear-jornada.component.html',
  styleUrls: ['./crear-jornada.component.css']
})
export class CrearJornadaComponent implements OnInit {
  @Output() messageEvent = new EventEmitter<string>();
  sendMessageInfo(msj:string){
    this.messageEvent.emit(msj)
  }
  @Output() esperaEvent = new EventEmitter<boolean>();
  esperaChange(msj:boolean){
    this.esperaEvent.emit(msj)
  }
  activaModal(){
    this.sendMessageInfo(this.mensaje);
    ($("#infoModal") as any).modal('show')
  }
  idLiga = (typeof localStorage.getItem("idLiga") == null) ? '0':localStorage.getItem("idLiga")?.valueOf()
  sesion = (typeof localStorage.getItem("sesion") == null) ? '0':localStorage.getItem("sesion")?.valueOf()
  temporada = (typeof localStorage.getItem("temporada") == null) ? '0':localStorage.getItem("temporada")?.valueOf()
  nombre:string=""
  fechaInicio:string=""
  fechaFin:string=""
  mensaje:string=""
  error:boolean=false
  constructor(private jornadaServ:JornadaService,private utilsServ:UtilsService) { }

  ngOnInit(): void {
    this.idLiga = (typeof localStorage.getItem("idLiga") == null) ? '0':localStorage.getItem("idLiga")?.valueOf()
    this.sesion = (typeof localStorage.getItem("sesion") == null) ? '0':localStorage.getItem("sesion")?.valueOf()
    this.temporada = (typeof localStorage.getItem("temporada") == null) ? '0':localStorage.getItem("temporada")?.valueOf()
  }
  crearJornada(){
    if(this.nombre!=""&&this.fechaInicio!=""&&this.fechaFin!=""){
      this.error=false
      this.esperaChange(true)
      this.jornadaServ.creaJornada(this.nombre,
      parseInt( this.temporada == undefined ? '0':this.temporada),this.fechaInicio,this.fechaFin).subscribe((data:Jornada)=>{
        this.mensaje = data.mensaje
        this.activaModal()
      },
      (error:any)=>{
        if(error.status == 403){
          this.sendMessageInfo(error)
          this.utilsServ.mataSesion("Sesión no válida")
        }

    })

    }else{
        this.error=true
    }
  }

}

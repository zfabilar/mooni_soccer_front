import { Component, OnInit,Input ,Output,EventEmitter} from '@angular/core';
import { Jugador } from 'src/app/core/models/jugador.models';
import { JugadorResponse } from 'src/app/core/models/jugadoresResponse.models';
import { JugadorService } from 'src/app/core/services/jugador/jugador.service';
import { UtilsService } from 'src/app/core/services/utils/utils.service';
@Component({
  selector: 'app-crear-jugador',
  templateUrl: './crear-jugador.component.html',
  styleUrls: ['./crear-jugador.component.css']
})
export class CrearJugadorComponent implements OnInit {

  constructor(private jugServ:JugadorService,private utilsServ:UtilsService) { }
  @Output() esperaEvent = new EventEmitter<boolean>();
  esperaChange(msj:boolean){
    this.esperaEvent.emit(msj)
  }
  @Input() jugador:Jugador = {idjugador: 0,nombrecompleto:"",numeroplayera:"",idequipo:null,activo:false,estatus:false,idliga:0}
  @Input() idTeam:number|null = 0
  mensaje :string=""
  ngOnInit(): void {
  }
  saveOrUpd(){
    if(this.jugador.idjugador!=0){
      this.update()
    }else{
      this.save()
    }
  }
  update(){

  }
  save(){
    if(this.jugador.nombrecompleto!="" && this.jugador.numeroplayera!=""){
      this.esperaChange(true)
      if(this.idTeam!=0){
        this.jugador.idequipo = this.idTeam
      }
      this.jugServ.crearJugador(this.jugador).subscribe((data:JugadorResponse)=>{
        this.esperaChange(false)
        alert(data.mensaje)
        if(data.exito){
          this.jugador = {idjugador: 0,nombrecompleto:"",numeroplayera:"",idequipo:null,activo:false,estatus:false,idliga:0}
        }
      },(error:any)=>{
        if(error.status == 403){
          this.utilsServ.mataSesion("Sesión no válida")
        }else{
          alert(error)
        }
        this.esperaChange(false)

    })
    }else{
      this.mensaje = "Todos los campos son obligatorios"
    }
  }
}

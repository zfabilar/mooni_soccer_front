import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { Jugador } from 'src/app/core/models/jugador.models';
import { JugadorResponse } from 'src/app/core/models/jugadoresResponse.models';
import { Partido } from 'src/app/core/models/partido.model';
import { PartidoTotal } from 'src/app/core/models/partidoTotal.models';
import { JugadorService } from 'src/app/core/services/jugador/jugador.service';
import { UtilsService } from 'src/app/core/services/utils/utils.service';
import { PartidoService } from 'src/app/core/services/partido/partidoService.service';
import { PartidosResposne } from 'src/app/core/models/partidosResponse.models';
import { AsistenciaResponse } from 'src/app/core/models/asistenciasResponse.models';

@Component({
  selector: 'app-cedula',
  templateUrl: './cedula.component.html',
  styleUrls: ['./cedula.component.css']
})
export class CedulaComponent implements OnInit {

  constructor(private jugadorServ:JugadorService,private utilsServ:UtilsService,private partServ:PartidoService) { }
  @Output() esperaEvent = new EventEmitter<boolean>();
  esperaChange(msj:boolean){
    this.esperaEvent.emit(msj)
  }
  ngOnInit(): void {
  }
  ngOnChanges(changes: SimpleChanges) {
    if (changes['partTotal'] && changes['partTotal'].currentValue.idpartido !=0) {
      this.listasJugadores()
      this.part ={
        idpartido: changes['partTotal'].currentValue.idpartido,
        idtemporada:changes['partTotal'].currentValue.idtemporada,
        idlocal:changes['partTotal'].currentValue.local.idequipo,
        goleslocal: changes['partTotal'].currentValue.goleslocal,
        idvisitante:changes['partTotal'].currentValue.visitante.idequipo,
        golesvisitante:changes['partTotal'].currentValue.golesvisitante,
        fecha:changes['partTotal'].currentValue.fecha,
        hora:changes['partTotal'].currentValue.hora,
        cancha:changes['partTotal'].currentValue.cancha.idcancha,
        idarbitro:changes['partTotal'].currentValue.arbitro.idarbitro,
        idjornada:changes['partTotal'].currentValue.idjornada,
        activo:changes['partTotal'].currentValue.activo,
        idtipopartido:changes['partTotal'].currentValue.idtipopartido,
        cedula:changes['partTotal'].currentValue.cedula
      }
      if(this.part.cedula){
        //Voy por la info de goles y etc
        this.partServ.obtenerAsistencias(this.part.idpartido).subscribe((data:AsistenciaResponse)=>{
          if(data.exito){
            data.asistencias.forEach((element)=>{
              var jug = this.jugGolAsisLocal.find((elementt)=>elementt.jug.idjugador==element.idjugador)
              if(jug!=undefined){
                jug.asistio = true
                jug.goles=element.goles
                var i = this.jugGolAsisLocal.findIndex((elementt)=>elementt.jug.idjugador==element.idjugador)
                this.jugGolAsisLocal[i] = jug
              }
              var jug = this.jugGolAsisVisitante.find((elementt)=>elementt.jug.idjugador==element.idjugador)
              if(jug!=undefined){
                jug.asistio = true
                jug.goles=element.goles
                var i = this.jugGolAsisVisitante.findIndex((elementt)=>elementt.jug.idjugador==element.idjugador)
                this.jugGolAsisVisitante[i] = jug
              }
            })
          }
        })
      }
    }
  }
  jugGolAsisLocal: {jug:Jugador,asistio:boolean,goles:number}[] = []
  jugGolAsisVisitante: {jug:Jugador,asistio:boolean,goles:number}[] = []
  golesSOLocal:number = 0
  golesSOVisitante:number = 0
  listasJugadores(){
    this.jugGolAsisLocal = []
    this.jugGolAsisVisitante = []
    this.obtenerjugadoresDeEquipo(this.partTotal.local.idequipo,true)
    this.obtenerjugadoresDeEquipo(this.partTotal.visitante.idequipo,false)
  }
  guardaCedula(){
    this.esperaChange(true)
    var auxLocal: {jug:Jugador,asistio:boolean,goles:number}[] = [];
    this.jugGolAsisLocal.forEach((element)=>{
      if(element.asistio){
        auxLocal.push(element)
      }
    })
    var auxVisit: {jug:Jugador,asistio:boolean,goles:number}[] = [];
    this.jugGolAsisVisitante.forEach((element)=>{
      if(element.asistio){
        auxVisit.push(element)
      }
    })
    this.partServ.cedulaPartido(this.part,auxLocal,auxVisit,this.golesSOLocal,this.golesSOVisitante).subscribe((data:PartidosResposne)=>{
      alert(data.mensaje)
      if(data.exito){
        this.part.cedula = true
      }
    })
  }
  calculaGolesLocal(){
    this.part.goleslocal=0
    this.jugGolAsisLocal.forEach((element)=>{
      if(element.asistio){
        this.part.goleslocal+=element.goles;
      }
    })
  }
  calculaGolesVisitante(){
    this.part.golesvisitante=0
    this.jugGolAsisVisitante.forEach((element)=>{
      if(element.asistio){
        this.part.golesvisitante+=element.goles;
      }
    })
  }
  obtenerjugadoresDeEquipo(idEquipo:number|null,local:boolean){
    this.esperaChange(true)
    this.jugadorServ.jugadoresEquipo(idEquipo).subscribe((data:JugadorResponse)=>{
      if(data.exito){
        if(local){
          data.jugadores.forEach((element)=>{
            this.jugGolAsisLocal.push({jug:element,asistio:false,goles:0})
          })
        }else{
          data.jugadores.forEach((element)=>{
            this.jugGolAsisVisitante.push({jug:element,asistio:false,goles:0})
          })
        }
      }
      this.esperaChange(false)
    },(error:any)=>{
      if(error.status == 403){
        this.utilsServ.mataSesion("Sesión no válida")
      }else{
        alert(error)
      }
      this.esperaChange(false)

  })
  }
  @Input() partTotal:PartidoTotal={idpartido: 0,idtemporada:0,
    local:{idequipo:null,nombre: "",fechaingreso: "",colorplayera : "",iddivision: 0,idrepresentante: 0,activo:false},
    replocal: {idUsuario:0,nickname:"",pass: "",tipo: 0,nombreCompleto : "",idliga: 0,telefono: ""},
    goleslocal:0,
    visitante:{idequipo:null,nombre: "",fechaingreso: "",colorplayera : "",iddivision: 0,idrepresentante: 0,activo:false},
    repVisitante: {idUsuario:0,nickname:"",pass: "",tipo: 0,nombreCompleto : "",idliga: 0,telefono: ""},
    golesvisitante:0,fecha:"",hora:"",
    cancha:{idcancha: 0,nombre:"",ubicacion:"",idliga:0,activo:false},
    arbitro:{idarbitro: 0,nombre: "",telefono: "",idliga: 0,activo: 0}  ,
    idjornada:0,activo:false,idtipopartido:0,cedula:false
  }
  part:Partido ={
    idpartido: 0,
    idtemporada:0,
    idlocal:0,
    goleslocal:0,
    idvisitante:0,
    golesvisitante:0,
    fecha:"",
    hora:"",
    cancha:0,
    idarbitro:0,
    idjornada:0,
    activo:false,
    idtipopartido:0,
    cedula:false
  }
}

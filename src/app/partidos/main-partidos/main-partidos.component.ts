import { Component, OnInit ,Output,EventEmitter,Input} from '@angular/core';
import { Partido } from 'src/app/core/models/partido.model';
import { PartidoTotal } from 'src/app/core/models/partidoTotal.models';
@Component({
  selector: 'app-main-partidos',
  templateUrl: './main-partidos.component.html',
  styleUrls: ['./main-partidos.component.css']
})
export class MainPartidosComponent implements OnInit {
  menuOption:string =""
  @Output() messageEvent = new EventEmitter<string>();
  sendMessageInfo(msj:string){
    this.messageEvent.emit(msj)
  }
  @Output() esperaEvent = new EventEmitter<boolean>();
  esperaChange(msj:boolean){
    this.esperaEvent.emit(msj)
  }
  @Output() partidoEvent = new EventEmitter<Partido>();
  @Input() division =0;
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
  partTotal:PartidoTotal={idpartido: 0,idtemporada:0,
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
  emitePartido(par:Partido){
    this.part = par
  }
  emitePartidoTotal(par:PartidoTotal){
    this.partTotal = par
  }
  cerrarModalEv:boolean = false
  cerrarModal(cerrarM:boolean){
    this.cerrarModalEv = cerrarM;
    setTimeout(() =>{

    this.cerrarModalEv = false;
    }, 500);
  }
  constructor() { }

  ngOnInit(): void {
  }
  cambiaOpc(opc:string){
    this.menuOption =opc;
  }
}

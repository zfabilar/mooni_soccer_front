import { Component, OnInit ,Input,ViewChild,Output,EventEmitter} from '@angular/core';
import {ConfigService} from '../core/services/configliga/configliga.service'
import {DivisionService} from '../core/services/division/division.service'
import { TemporadaService } from '../core/services/temporada/temporada.service';
import {configLiga} from '../core/models/configLiga.model'
import { LigaService } from '../core/services/liga/liga.service';
import { Liga } from '../core/models/liga.model';
import {Division} from '../core/models/division.model'
import {ResponseModel} from '../core/models/response.model'
import { Temporada } from '../core/models/temporada.model';
import { Representante } from '../core/models/representante.model';
import { Equipo } from '../core/models/equipo.models';
import { CrearTemporadaComponent } from "../temporadas/crear-temporada/crear-temporada.component";
import * as bootstrap from "bootstrap";
import * as $AB from 'jquery';
import { Partido } from '../core/models/partido.model';
@Component({
  selector: 'app-presidente',
  templateUrl: './presidente.component.html',
  styleUrls: ['./presidente.component.css'],
})
export class PresidenteComponent implements OnInit {
  @Output() messageEvent = new EventEmitter<string>();
  sendMessageInfo(msj:string){
    this.mensajeModal = msj
  }
  mensajeModal : string|null = null
  espera = false
  temporadaActual: any = {}
  liga: any ={
    nombre : ''
  }
  menuOption = "home"
  configLiga : any
  divisiones: any = {}
  divisionSelected : number = 0
  arbitro:{idarbitro: number,
    nombre: string,
    telefono: string,
    idliga: number,
    activo: number} = {"idarbitro":0,"nombre":"","telefono":"","idliga":0,"activo":0}
  representante : Representante= {id:0,nickname:"",pass: "",tipo: 0,nombreCompleto : "",idliga: 0,telefono: "",equipo:{idequipo:0,nombre: "",fechaingreso: "",colorplayera : "",iddivision: 0,idrepresentante: 0,activo:false}}
  equipo:Equipo = {idequipo:0,nombre: "",fechaingreso: "",colorplayera : "",iddivision: 0,idrepresentante: 0,activo:false}

  constructor(private configServ : ConfigService, private divisionServ: DivisionService,private ligaServ:LigaService,
    private tempporadaServ: TemporadaService) { }
  id = (typeof localStorage.getItem("sesion") == null) ? '0':localStorage.getItem("sesion")?.valueOf()
  idLiga = (typeof localStorage.getItem("idLiga") == null) ? '0':localStorage.getItem("idLiga")?.valueOf()
  receiveMessage(msj:string) {
    this.mensajeModal = msj;
  }
  esperaChange(msj:boolean){
    this.espera=msj
  }
  ngOnInit(): void {
    this.menuOption = "home"
    localStorage.removeItem("division")
    if(localStorage.getItem("user") == undefined){
      alert('Debes iniciar sesión')
      location.href = "";
    }
    this.espera = true
    this.configServ.obtieneConfiguracion(parseInt( this.id == undefined ? '0':this.id),parseInt( this.idLiga == undefined ? '0':this.idLiga)).subscribe((data:configLiga)=>{
      this.configLiga = data.config
      this.divisionServ.obtieneDivisiones(parseInt( this.idLiga == undefined ? '0':this.idLiga)).subscribe((data:Division)=>{
        this.divisiones = data
        this.tempporadaServ.obtenerTemporada(parseInt( this.idLiga == undefined ? '0':this.idLiga),parseInt( this.id == undefined ? '0':this.id)).subscribe((data:Temporada)=>{
          this.temporadaActual = data.temporada
          localStorage.setItem("temporada", String(data.temporada.idtemporada))
          this.ligaServ.ligaByPK(parseInt( this.idLiga == undefined ? '0':this.idLiga),parseInt( this.id == undefined ? '0':this.id)).subscribe((data:Liga)=>{
            this.liga = data.liga
            this.espera = false
          },
          (error:any)=>{
            if(error.status == 403){
              this.espera= false
              this.mataSesion(error.error.mensaje)
            }
          })
        },
        (error:any)=>{
          if(error.status == 403){
            this.espera= false
            this.mataSesion(error.error.mensaje)
          }
        })
      },(error:any)=>{
        if(error.status == 403){
          this.espera= false
          this.mataSesion(error.error.mensaje)
        }
      })
    },
    (error:any)=>{
      if(error.status == 403){
        this.espera= false
        this.mataSesion(error.error.mensaje)
      }
    })

  }
  actualizaDivision(){
    localStorage.setItem("division",this.divisionSelected.toString())
    if(this.divisionSelected==0){
      this.ngOnInit()
    }
  }
  cambiaOpc(opc:string){
    if((opc=="equipos" || opc=="partidos") && this.divisionSelected==0){
      ($("#modalSelectDiv") as any).modal('show')
    }else{
      this.menuOption =opc;
    }
  }
  mataSesion(mensje:string){
    alert(mensje)
        localStorage.clear()
        location.href = "/login"
  }
  setArbitro(arb:any){
    this.arbitro = arb;
  }
  setRepresentante(rep:any){
    this.representante=rep
  }
  setEquipo(team:any){
    this.equipo = team
  }


}

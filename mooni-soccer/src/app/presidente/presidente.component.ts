import { Component, OnInit } from '@angular/core';
import {ConfigService} from '../core/services/configliga/configliga.service'
import {DivisionService} from '../core/services/division/division.service'
import { TemporadaService } from '../core/services/temporada/temporada.service';
import {configLiga} from '../core/models/configLiga.model'
import { LigaService } from '../core/services/liga/liga.service';
import { Liga } from '../core/models/liga.model';
import {Division} from '../core/models/division.model'
import {ResponseModel} from '../core/models/response.model'
import { Temporada } from '../core/models/temporada.model';

@Component({
  selector: 'app-presidente',
  templateUrl: './presidente.component.html',
  styleUrls: ['./presidente.component.css']
})
export class PresidenteComponent implements OnInit {
  espera = false
  temporadaActual: any = {}
  liga: any ={
    nombre : ''
  }
  menuOption = "home"
  configLiga : any
  divisiones: any = {}
  divisionSelected : string = ''
  constructor(private configServ : ConfigService, private divisionServ: DivisionService,private ligaServ:LigaService,
    private tempporadaServ: TemporadaService) { }
  id = (typeof localStorage.getItem("sesion") == null) ? '0':localStorage.getItem("sesion")?.valueOf()
  idLiga = (typeof localStorage.getItem("idLiga") == null) ? '0':localStorage.getItem("idLiga")?.valueOf()
  ngOnInit(): void {
    if(localStorage.getItem("user") == undefined){
      alert('Debes iniciar sesión')
      location.href = "";
    }
    this.espera = true
    this.configServ.obtieneConfiguracion(parseInt( this.id == undefined ? '0':this.id),parseInt( this.idLiga == undefined ? '0':this.idLiga)).subscribe((data:configLiga)=>{
      this.configLiga = data.config
      this.divisionServ.obtieneDivisiones(parseInt( this.idLiga == undefined ? '0':this.idLiga),parseInt( this.id == undefined ? '0':this.id)).subscribe((data:Division)=>{
        this.divisiones = data
        this.tempporadaServ.obtenerTemporada(parseInt( this.idLiga == undefined ? '0':this.idLiga),parseInt( this.id == undefined ? '0':this.id)).subscribe((data:Temporada)=>{
          this.temporadaActual = data.temporada
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
  cambiaOpc(opc:string){
    this.menuOption =opc;
  }
  mataSesion(mensje:string){
    alert(mensje)
        localStorage.clear()
        location.href = "/login"
  }

}

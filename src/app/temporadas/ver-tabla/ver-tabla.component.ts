import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { EstadisticasResponse } from 'src/app/core/models/estadisticasResponse.models';
import { EstadisticasService } from 'src/app/core/services/estadisticas/estadisticas.service';
import { EquiposService } from 'src/app/core/services/equipo/equipos.service';
import { Equipo } from 'src/app/core/models/equipo.models';
import { UtilsService } from 'src/app/core/services/utils/utils.service';
import { EquipoResponse } from 'src/app/core/models/equipoResponse.models';
import { Estadisticas } from 'src/app/core/models/estadisticas.models';
@Component({
  selector: 'app-ver-tabla',
  templateUrl: './ver-tabla.component.html',
  styleUrls: ['./ver-tabla.component.css']
})
export class VerTablaComponent implements OnInit {
  constructor(private eServ:EstadisticasService,private equiposServ:EquiposService,private utilsServ:UtilsService) { }
  @Input() division =0;
  @Output() esperaEvent = new EventEmitter<boolean>();
  esperaChange(msj:boolean){
    this.espera = msj
  }
  espera:boolean=false
  listaEquipos:Equipo[]=[]
  listaEstadisticas:{equipo:Equipo,estadistic:Estadisticas,dif:number,jj:number}[]=[]
  ngOnInit(): void {
    this.obtenerLista()
  }
  ngOnChanges(changes: SimpleChanges) {
    // Este método se llama cuando hay cambios en las propiedades de entrada
    if (changes['division'] && !changes['division'].firstChange) {
      setTimeout(() =>{
        this.ngOnInit()
      }, 500);
    }
  }
  obtenerTabla(){
    this.listaEstadisticas = []
    this.eServ.obtieneTG().subscribe((data:EstadisticasResponse)=>{
      if(data.exito){
        data.estadisticas.forEach((element)=>{
          var team = this.listaEquipos.filter((el)=>el.idequipo==element.idequipo)
          if(team.length>0){
            this.listaEstadisticas.push({equipo:team[0],estadistic:element,dif:element.golesfavor - element.golescontra,jj:element.partidosempatados+element.partidosganados+element.partidosperdidos})
          }
        })
        this.listaEstadisticas.sort((a,b)=>{
          if(a.estadistic.puntos>b.estadistic.puntos){
            return -1;
          }
          if(a.estadistic.puntos<b.estadistic.puntos){
            return 1;
          }
          if(a.dif>b.dif){
            return -1;
          }
          if(a.dif<b.dif){
            return 1;
          }
          //La dif es igual
          if(a.estadistic.golesfavor>a.estadistic.golesfavor){
            return -1;
          }
          if(a.estadistic.golesfavor<a.estadistic.golesfavor){
            return 1;
          }
          return 0;
        })
      }
    },(error:any)=>{
      if(error.status == 403){
        this.utilsServ.mataSesion("Sesión no válida")
      }else{
        alert(error)
      }
      this.esperaChange(false)
    })
  }
  obtenerLista(){
    this.esperaChange(true)
    setTimeout(() =>{
      var iddivision = (typeof localStorage.getItem("division") == null) ? '0':localStorage.getItem("division")?.valueOf()
      this.equiposServ.obtieneEquipos(parseInt( iddivision == undefined ? '0':iddivision)).subscribe((data:EquipoResponse)=>{
        this.listaEquipos = []
        if(data.exito){
          this.listaEquipos = data.equipos
          this.obtenerTabla()
        }else{
          this.obtenerLista()
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
    }, 500);

  }
}

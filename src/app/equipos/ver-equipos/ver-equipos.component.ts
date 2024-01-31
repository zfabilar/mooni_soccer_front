import { Component, OnInit ,Output,EventEmitter,Input,SimpleChanges} from '@angular/core';
import { EquiposService } from 'src/app/core/services/equipo/equipos.service';
import { EquipoResponse } from 'src/app/core/models/equipoResponse.models';
import { Equipo } from 'src/app/core/models/equipo.models';
import { UtilsService } from 'src/app/core/services/utils/utils.service';
import { UsuarioService } from 'src/app/core/services/usuarios/usuario.service';
import { Representante } from 'src/app/core/models/representante.model';
import { WPService } from 'src/app/core/services/whatsapp/wp.service';
@Component({
  selector: 'app-ver-equipos',
  templateUrl: './ver-equipos.component.html',
  styleUrls: ['./ver-equipos.component.css']
})
export class VerEquiposComponent implements OnInit {

  constructor(private equiposServ:EquiposService,private utilsServ:UtilsService,private usrServ:UsuarioService,private wpServ:WPService ) { }
  @Output() esperaEvent = new EventEmitter<boolean>();
  esperaChange(msj:boolean){
    this.esperaEvent.emit(msj)
  }
  listaEquipos:Equipo[]=[]
  ngOnInit(): void {
      this.obtieneRepresentantes()
      this.obtenerLista()
  }
  @Input() divisionFromMain:number = 0;
  ngOnChanges(changes: SimpleChanges) {
    if (changes['divisionFromMain'] && changes['divisionFromMain'].currentValue !=0) {
      this.inicio()
    }
  }
  inicio(){
    setTimeout(() =>{
      this.ngOnInit()
    }, 500);
  }
  representantes:Representante[] = []
  idLiga = (typeof localStorage.getItem("idLiga") == null) ? '0':localStorage.getItem("idLiga")?.valueOf()
  obtieneRepresentantes(){
    this.esperaChange(true)
    this.usrServ.listaRepresentantes(parseInt( this.idLiga == undefined ? '0':this.idLiga)).subscribe((data:{mensaje: string,exito:boolean,data: Representante[]})=>{
      this.representantes = []
      if(data.exito){
          this.representantes = data.data
        }
        this.esperaChange(false)
        // Aquí puedes poner el código que deseas ejecutar después de la pausa de 3 segundos
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
        this.listaEquipos = [ ]
        if(data.exito){
          this.listaEquipos = data.equipos
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
  borraEquipo(team:Equipo){
    console.log(team)
    this.esperaChange(true)
    team.activo = false
    this.equiposServ.actualizaEquipo(team).subscribe((data:EquipoResponse)=>{
      alert(data.mensaje)
      this.wpServ.enviarMensaje("Se eliminó tu equipo ("+team.nombre+")",this.representantes.filter((element)=>element.id==team.idrepresentante)[0].telefono)
      this.esperaChange(false)
      this.ngOnInit()
    },(error:any)=>{
      this.esperaChange(false)
      if(error.status == 403){
        this.utilsServ.mataSesion("Sesión no válida")
      }else{
        alert(error)
      }
  })
  }
  @Output() teamEvent = new EventEmitter<Equipo>();
  modalAE(team:Equipo){
    this.teamEvent.emit(team)
  }
  obtieneRep(idRep:number){
    return this.representantes.filter((element)=>element.id==idRep)[0] ==undefined?"":this.representantes.filter((element)=>element.id==idRep)[0].nombreCompleto
  }
}

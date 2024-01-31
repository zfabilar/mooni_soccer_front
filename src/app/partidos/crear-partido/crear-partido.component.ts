import { Component, OnInit ,Output,EventEmitter,Input,SimpleChanges} from '@angular/core';
import { Equipo } from 'src/app/core/models/equipo.models';
import { EquiposService } from 'src/app/core/services/equipo/equipos.service';
import { UtilsService } from 'src/app/core/services/utils/utils.service';
import { EquipoResponse } from 'src/app/core/models/equipoResponse.models';
import { Partido } from 'src/app/core/models/partido.model';
import { PartidoService } from 'src/app/core/services/partido/partidoService.service';
import { ArbitrosService } from 'src/app/core/services/arbitro/arbitros.service';
import { ArbitroModel } from 'src/app/core/models/arbitros.models';
import { JornadaService } from 'src/app/core/services/jornada/jornada.service';
import { Jornada } from 'src/app/core/models/jornada.models';
import { TipoPartidoService } from 'src/app/core/services/tipoPartido/tipoPartido.service';
import { CanchasService } from 'src/app/core/services/canchas/canchas.service';
import { Canchas } from 'src/app/core/models/canchas.models';
import { Cancha } from 'src/app/core/models/cancha.models';
import { TipoPartidos } from 'src/app/core/models/tipoPartidos.models';
import { TipoPartido } from 'src/app/core/models/tipoPartido.models';
import { PartidosResposne } from 'src/app/core/models/partidosResponse.models';
import { WPService } from 'src/app/core/services/whatsapp/wp.service';
import { UsuarioService } from 'src/app/core/services/usuarios/usuario.service';
import { Representante } from 'src/app/core/models/representante.model';
@Component({
  selector: 'app-crear-partido',
  templateUrl: './crear-partido.component.html',
  styleUrls: ['./crear-partido.component.css']
})
export class CrearPartidoComponent implements OnInit {
  @Input() part:Partido ={
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
  activo:true,
  idtipopartido:1,
  cedula:false
  }
  @Input() divisionFromMain:number = 0;
  ngOnChanges(changes: SimpleChanges) {
    // Este método se llama cuando hay cambios en las propiedades de entrada
    if (changes['part'] && changes['part'].currentValue.idpartido !=0) {
      this.ngOnInit()
    }
    if (changes['divisionFromMain'] && changes['divisionFromMain'].currentValue !=0) {
      this.listaEqu = []
      setTimeout(() =>{
        this.obtenerListaEquipos()
      }, 500);
    }
  }
  @Output() esperaEvent = new EventEmitter<boolean>();
  esperaChange(msj:boolean){
    this.esperaEvent.emit(msj)
  }
  @Output() cierraModalEv = new EventEmitter<boolean>();
  listaJornada :any[] = []
  idLiga = (typeof localStorage.getItem("idLiga") == null) ? '0':localStorage.getItem("idLiga")?.valueOf()
  temporada = (typeof localStorage.getItem("temporada") == null) ? '0':localStorage.getItem("temporada")?.valueOf()
  listaEqu:Equipo[]=[]
  listaArb:any[] = []
  listaCanchas:Cancha[]=[]
  listaTipos:TipoPartido[]=[]
  representantes:Representante[] = []
  mensajeError:string = ""
  constructor(private equiposServ:EquiposService,private utilsServ:UtilsService,private arbitrosServ:ArbitrosService,
    private jornadaService:JornadaService,private tipopartidoServ:TipoPartidoService,private canchasServ:CanchasService,
    private partidoServ:PartidoService,private wpServ:WPService,private usrServ:UsuarioService) { }

  ngOnInit(): void {
    this.obtenerListaEquipos()
    this.obtenerListaArbitros()
    this.listaJordanas()
    this.obtieneListaCanchas()
    this.obtieneListaTipoPartidos()
    this.obtieneRepresentantes()
  }
  obtieneRepresentantes(){
    this.esperaChange(true)
    setTimeout(() =>{
    this.usrServ.listaRepresentantes(parseInt( this.idLiga == undefined ? '0':this.idLiga)).subscribe((data:{mensaje: string,exito:boolean,data: Representante[]})=>{
      this.representantes = data.data
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
    }, 500);
  }
  obtenerListaEquipos(){
    this.esperaChange(true)
    setTimeout(() =>{
      var iddivision = (typeof localStorage.getItem("division") == null) ? '0':localStorage.getItem("division")?.valueOf()
      this.listaEqu = []
      this.equiposServ.obtieneEquipos(parseInt( iddivision == undefined ? '0':iddivision)).subscribe((data:EquipoResponse)=>{
        if(data.exito){
          this.listaEqu = data.equipos
        }else{
          this.obtenerListaEquipos()
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
  comparaLV(){
    if(this.part.idlocal==this.part.idvisitante){
      this.part.idvisitante = 0
    }
  }
  obtenerListaArbitros(){
    this.esperaChange(true)
    this.arbitrosServ.obtieneArbitros(parseInt( this.idLiga == undefined ? '0':this.idLiga)).subscribe(
      (data:ArbitroModel)=>{
          this.listaArb = data.arbitro;
          this.esperaChange(false)
      },
      (error:any)=>{
        if(error.status == 403){
          this.utilsServ.mataSesion("Sesión no válida")
        }

    }
    )
  }
  obtieneListaCanchas(){
    this.esperaChange(true)
    this.canchasServ.obtieneCanchas(parseInt( this.idLiga == undefined ? '0':this.idLiga)).subscribe((data:Canchas)=>{
      this.listaCanchas = data.canchas
      this.esperaChange(false)
    })
  }
  obtieneListaTipoPartidos(){
    this.esperaChange(true)
    this.tipopartidoServ.obtieneTipos().subscribe((data:TipoPartidos)=>{
      this.listaTipos = data.tipopartidos
      this.esperaChange(false)
    })
  }
  listaJordanas(){
    this.esperaChange(true);
    this.jornadaService.obtieneJornadas().subscribe((data:Jornada)=>{
      this.listaJornada = data.jornadas
      this.esperaChange(false)
    })
  }
  crearPartido(){
    this.esperaChange(true)
    try{
    var teamLocal:Equipo = this.listaEqu.filter((element)=>element.idequipo==this.part.idlocal)[0]
    var teamVisitante:Equipo = this.listaEqu.filter((element)=>element.idequipo==this.part.idvisitante)[0]
    var arbi:any = this.listaArb.filter((element)=>element.idarbitro==this.part.idarbitro)[0]
    var canch:Cancha = this.listaCanchas.filter((element)=>element.idcancha==this.part.cancha)[0]
    var jorn:any= this.listaJornada.filter((element)=>element.idjornada==this.part.idjornada)[0]
    var repLocal:Representante = this.representantes.filter((element)=>element.equipo != undefined? element.equipo.idrepresentante==teamLocal.idrepresentante:0)[0]
    var repVisitante:Representante = this.representantes.filter((element)=>element.equipo != undefined? element.equipo.idrepresentante==teamVisitante.idrepresentante:0)[0]
    var tipoPar:TipoPartido = this.listaTipos.filter((element)=>element.idtipo==this.part.idtipopartido)[0]
    this.part.idtemporada = parseInt( this.temporada == undefined ? '0':this.temporada)
    this.partidoServ.creaPartido(this.part).subscribe((data:PartidosResposne)=>{
        alert(data.mensaje)
        if(data.exito){
          this.wpServ.enviarMensaje("Hola "+repLocal.nombreCompleto+", tienes un partido asignado de la "+jorn.nombrejornada +"\n"+
          "Tipo: "+tipoPar.tipo+"\n"+
          teamLocal.nombre+" VS "+teamVisitante.nombre+"\n"+
          "Fecha: "+this.part.fecha+" Hora: "+this.part.hora+"\n"+
          "Cancha: "+canch.nombre+" Arbitro: "+arbi.nombre,repLocal.telefono).subscribe()
          this.wpServ.enviarMensaje("Hola "+repVisitante.nombreCompleto+", tienes un partido asignado de la "+jorn.nombrejornada+"\n"+
          "Tipo: "+tipoPar.tipo+"\n"+
          teamLocal.nombre+" VS "+teamVisitante.nombre+"\n"+
          "Fecha: "+this.part.fecha+" Hora: "+this.part.hora+"\n"+
          "Cancha: "+canch.nombre+" Arbitro: "+arbi.nombre,repVisitante.telefono).subscribe()
          this.wpServ.enviarMensaje("Hola "+arbi.nombre+", tienes un partido asignado de la "+jorn.nombrejornada+"\n"+
          "Tipo: "+tipoPar.tipo+"\n"+
          teamLocal.nombre+" VS "+teamVisitante.nombre+"\n"+
          "Fecha: "+this.part.fecha+" Hora: "+this.part.hora+"\n"+
          "Cancha: "+canch.nombre+" Arbitro: "+arbi.nombre,arbi.telefono).subscribe()
        }
        //let mensaje = `Hola, mi nombre es ${nombre} y tengo ${edad} años.`;
        this.ngOnInit()
    },
      (error:any)=>{
        if(error.status == 403){
          this.utilsServ.mataSesion("Sesión no válida")
        }

    })
    }catch(e){
      console.log(e)
      this.esperaChange(false)
    }
  }
  actualizarPartido(){
    this.esperaChange(true)
    this.partidoServ.updateDatosPartido(this.part).subscribe((data:PartidosResposne)=>{
      alert(data.mensaje)
      if(data.exito){
        this.cierraModalEv.emit(true)
        //($("#modalCP") as any).modal('hide')
        /*this.wpServ.enviarMensaje("Hola "+repLocal.nombreCompleto+", tienes un partido asignado de la "+jorn.nombrejornada +"\n"+
        "Tipo: "+tipoPar.tipo+"\n"+
        teamLocal.nombre+" VS "+teamVisitante.nombre+"\n"+
        "Fecha: "+this.part.fecha+" Hora: "+this.part.hora+"\n"+
        "Cancha: "+canch.nombre+" Arbitro: "+arbi.nombre,repLocal.telefono).subscribe()
        this.wpServ.enviarMensaje("Hola "+repVisitante.nombreCompleto+", tienes un partido asignado de la "+jorn.nombrejornada+"\n"+
        "Tipo: "+tipoPar.tipo+"\n"+
        teamLocal.nombre+" VS "+teamVisitante.nombre+"\n"+
        "Fecha: "+this.part.fecha+" Hora: "+this.part.hora+"\n"+
        "Cancha: "+canch.nombre+" Arbitro: "+arbi.nombre,repVisitante.telefono).subscribe()
        this.wpServ.enviarMensaje("Hola "+arbi.nombre+", tienes un partido asignado de la "+jorn.nombrejornada+"\n"+
        "Tipo: "+tipoPar.tipo+"\n"+
        teamLocal.nombre+" VS "+teamVisitante.nombre+"\n"+
        "Fecha: "+this.part.fecha+" Hora: "+this.part.hora+"\n"+
        "Cancha: "+canch.nombre+" Arbitro: "+arbi.nombre,arbi.telefono).subscribe()*/
      }
      //let mensaje = `Hola, mi nombre es ${nombre} y tengo ${edad} años.`;
      this.ngOnInit()
  },
    (error:any)=>{
      if(error.status == 403){
        this.utilsServ.mataSesion("Sesión no válida")
      }

  })
  }
  save(){
   // this.esperaChange(true)
    if(this.part.idlocal==0 || this.part.idvisitante==0||this.part.cancha==0||this.part.fecha==""
    ||this.part.idarbitro==0||this.part.hora==""||this.part.idtipopartido==0||this.part.idjornada==0){
      this.mensajeError = "Todos los campos son obligatorios"
    }else{
      if(this.part.idpartido==0){
        //Crea
        this.crearPartido()
      }else{
        //Actualiza
        this.actualizarPartido()
      }
    }

  }
}

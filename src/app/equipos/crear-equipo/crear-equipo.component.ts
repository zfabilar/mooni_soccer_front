import { Component, OnInit,Output,EventEmitter,Input,ViewChild ,ElementRef,SimpleChanges} from '@angular/core';
import { Equipo } from 'src/app/core/models/equipo.models';
import { UtilsService } from 'src/app/core/services/utils/utils.service';
import { UsuarioService } from 'src/app/core/services/usuarios/usuario.service';
import { Representante } from 'src/app/core/models/representante.model';
import { EquiposService } from 'src/app/core/services/equipo/equipos.service';
import { EquipoResponse } from 'src/app/core/models/equipoResponse.models';
import { WPService } from 'src/app/core/services/whatsapp/wp.service';
import { DivisionService } from 'src/app/core/services/division/division.service';
import { Division } from 'src/app/core/models/division.model';
import { JugadorService } from 'src/app/core/services/jugador/jugador.service';
import { JugadorResponse } from 'src/app/core/models/jugadoresResponse.models';
import { Jugador } from 'src/app/core/models/jugador.models';
@Component({
  selector: 'app-crear-equipo',
  templateUrl: './crear-equipo.component.html',
  styleUrls: ['./crear-equipo.component.css']
})
export class CrearEquipoComponent implements OnInit {
  representante = "selecciona"
  constructor(private utilsServ:UtilsService,private usrServ:UsuarioService,private equipoServ:EquiposService,private wpServ:WPService,
    private divisionServ: DivisionService,private jugadorServ:JugadorService) { }

  ngOnInit(): void {
    this.obtieneRepresentantes()
    setInterval(this.repeticion, 60000);
    this.obtieneDivisiones()
    this.obtenerjugadoresLibres()
    this.jugadoresEnEquipo = []
    this.jugadoresLibres = []
  }
  ngOnChanges(changes: SimpleChanges) {
    if (changes['equipo'] && changes['equipo'].currentValue.idequipo !=0) {
      this.obtieneRepresentantes()
      this.listasJugadores()
    }
  }
  listasJugadores(){
    this.jugadoresEnEquipo = []
      this.obtenerjugadoresLibres()
      this.obtenerjugadoresDeEquipo()
      this.limpiaRepetidos()
  }
  @Output() messageEvent = new EventEmitter<string>();
  sendMessageInfo(msj:string){
    this.messageEvent.emit(msj)
  }
  @Output() esperaEvent = new EventEmitter<boolean>();
  esperaChange(msj:boolean){
    this.esperaEvent.emit(msj)
  }
  mensaje:string=""
  idLiga = (typeof localStorage.getItem("idLiga") == null) ? '0':localStorage.getItem("idLiga")?.valueOf()
  iddivision = (typeof localStorage.getItem("division") == null) ? '0':localStorage.getItem("division")?.valueOf()
  @Input() equipo:Equipo = {idequipo:null,nombre: "",fechaingreso: "",colorplayera : '#000000',iddivision: 0,idrepresentante: 0,activo:false}
  divisiones: any = []
  representantes:Representante[] = []
  jugadoresLibres:Jugador[]=[];
  jugadoresEnEquipo:Jugador[]=[]
  jugadorToMove:Jugador = {idjugador: 0,nombrecompleto:"",numeroplayera:"",idequipo:0,activo:false,estatus:false,idliga:0}
  jugadorToReturn:Jugador = {idjugador: 0,nombrecompleto:"",numeroplayera:"",idequipo:0,activo:false,estatus:false,idliga:0}
  volverSeleccion(seleccion:string){
    if(seleccion == "crear"){
      this.equipo.idrepresentante = 0
    }
  }
  moveToTeam(){
    this.limpiaRepetidos()
    if(this.jugadorToMove.idjugador!=0){
      this.jugadoresEnEquipo.push(this.jugadorToMove)
      this.jugadoresLibres = this.jugadoresLibres.filter((element)=>element.idjugador!=this.jugadorToMove.idjugador)
      this.jugadorToMove = {idjugador: 0,nombrecompleto:"",numeroplayera:"",idequipo:0,activo:false,estatus:false,idliga:0}
    }
  }
  limpiaRepetidos(){
    this.jugadoresLibres = this.jugadoresLibres.filter((elemento, index) => {
      return this.jugadoresLibres.indexOf(elemento) === index;
    });
    this.jugadoresEnEquipo = this.jugadoresEnEquipo.filter((elemento, index) => {
      return this.jugadoresEnEquipo.indexOf(elemento) === index;
    });
  }
  movetoFree(){
    this.limpiaRepetidos()
    if(this.jugadorToReturn.idjugador!=0){
      this.jugadoresLibres.push(this.jugadorToReturn)
      this.jugadoresEnEquipo = this.jugadoresEnEquipo.filter((element)=>element.idjugador!=this.jugadorToReturn.idjugador)
      this.jugadorToReturn = {idjugador: 0,nombrecompleto:"",numeroplayera:"",idequipo:0,activo:false,estatus:false,idliga:0}
    }
  }
  jugadorAMover(jug:Jugador){
    this.jugadoresLibres.forEach(element => {
      ($("#Jug"+element.idjugador) as any).removeClass('row-selected');
    });
    ($("#Jug"+jug.idjugador) as any).addClass('row-selected');
    this.jugadorToMove = jug
  }
  jugadorARegresar(jug:Jugador){
    this.jugadoresEnEquipo.forEach(element => {
      ($("#RevJug"+element.idjugador) as any).removeClass('row-selected-reverse');
    });
    ($("#RevJug"+jug.idjugador) as any).addClass('row-selected-reverse');
    this.jugadorToReturn = jug
  }
  obtenerjugadoresLibres(){
    this.esperaChange(true)
    this.jugadorServ.jugadoresLibres().subscribe((data:JugadorResponse)=>{
      this.jugadoresLibres = []
      if(data.exito){
        this.jugadoresLibres = data.jugadores
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
  obtenerjugadoresDeEquipo(){
    this.esperaChange(true)
    this.jugadorServ.jugadoresEquipo(this.equipo.idequipo).subscribe((data:JugadorResponse)=>{
      this.jugadoresEnEquipo = []
      if(data.exito){
        this.jugadoresEnEquipo = data.jugadores
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
  obtieneRepresentantes(){
    this.esperaChange(true)
    this.usrServ.listaRepresentantes(parseInt( this.idLiga == undefined ? '0':this.idLiga)).subscribe((data:{mensaje: string,exito:boolean,data: Representante[]})=>{
      this.representantes = []
      if(this.equipo.idequipo==0){
        this.representantes = data.data.filter((element)=>element.equipo==undefined)
      }else{
        this.representantes = data.data.filter((valor, indice, self) => {
          return self.indexOf(valor) === indice;
        })
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
  jugadoresMove(){
    this.jugadorServ.liberarJugadores(this.jugadoresLibres.map((element)=>element.idjugador)).subscribe()
    this.jugadoresEnEquipo.forEach((element)=>{
      element.idequipo = this.equipo.idequipo
      this.jugadorServ.updateJugador(element).subscribe()
    })
  }
  guardar(){
    this.esperaChange(true)
    this.equipo.iddivision = parseInt( this.iddivision == undefined ? '0':this.iddivision)
    this.equipoServ.creaEquipo(this.equipo).subscribe((data:EquipoResponse)=>{
      this.mensaje = data.mensaje
      if(data.exito){
        this.jugadoresMove()
      }
      this.wpServ.enviarMensaje("Se te asingnó un equipo ("+this.equipo.nombre+")",this.representantes.filter((element)=>element.id==this.equipo.idrepresentante)[0].telefono).subscribe()
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
  obtieneDivisiones(){
    this.divisionServ.obtieneDivisiones(parseInt( this.idLiga == undefined ? '0':this.idLiga)).subscribe((data:Division)=>{
      this.divisiones = data.divisiones
    })
  }
  actualizar(){
    this.esperaChange(true)
    //this.equipo.iddivision = parseInt( this.iddivision == undefined ? '0':this.iddivision)
    this.equipoServ.actualizaEquipo(this.equipo).subscribe((data:EquipoResponse)=>{
      this.mensaje = data.mensaje
      this.esperaChange(false)
      if(data.exito){
        this.jugadoresMove()
      }
      this.wpServ.enviarMensaje("Hola "+this.representantes.filter( (element)=>element.id==this.equipo.idrepresentante)[0].nombreCompleto+
      ", Se actualizó tu equipo ("+this.equipo.nombre+")",this.representantes.filter((element)=>element.id==this.equipo.idrepresentante)[0].telefono).subscribe()
    },(error:any)=>{
      if(error.status == 403){
        this.utilsServ.mataSesion("Sesión no válida")
      }else{
        alert(error)
      }
      this.esperaChange(false)
  })
  }
  agregarJugador(){

  }
  createUpdaTeam(){
    if(this.equipo.nombre != "" && this.equipo.idrepresentante!=0){
      this.mensaje =""
      if(this.equipo.idequipo !=0){
        this.actualizar()
      }else{
        this.guardar()
      }
    }else{
      this.mensaje = "Ambos campos son obligatorios"
    }
  }
  repeticion() {
    this.representantes = this.representantes
  }

}

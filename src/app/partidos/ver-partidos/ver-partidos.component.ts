import { Component, OnInit ,Output,EventEmitter,Input,SimpleChanges} from '@angular/core';
import { JornadaService } from 'src/app/core/services/jornada/jornada.service';
import { TipoPartidoService } from 'src/app/core/services/tipoPartido/tipoPartido.service';
import { Jornada } from 'src/app/core/models/jornada.models';
import { PartidoService } from 'src/app/core/services/partido/partidoService.service';
import { PartidosTotalResponse } from 'src/app/core/models/partidosTotalResponse.models';
import { UtilsService } from 'src/app/core/services/utils/utils.service';
import { PartidoTotal } from 'src/app/core/models/partidoTotal.models';
import { Partido } from 'src/app/core/models/partido.model';
import { PartidosResposne } from 'src/app/core/models/partidosResponse.models';
@Component({
  selector: 'app-ver-partidos',
  templateUrl: './ver-partidos.component.html',
  styleUrls: ['./ver-partidos.component.css']
})
export class VerPartidosComponent implements OnInit {
  @Output() esperaEvent = new EventEmitter<boolean>();
  esperaChange(msj:boolean){
    this.esperaEvent.emit(msj)
  }
  @Output() partidoEvent = new EventEmitter<Partido>();
  @Output() partidoTotalEvent = new EventEmitter<PartidoTotal>();
  @Input() divisionFromMain:number = 0;
  @Input() cerrarModalEv:boolean = false
  ngOnChanges(changes: SimpleChanges) {
    // Este método se llama cuando hay cambios en las propiedades de entrada
    if (changes['divisionFromMain'] && changes['divisionFromMain'].currentValue !=0) {
      this.ngOnInit()
    }
    if (changes['cerrarModalEv'] && changes['cerrarModalEv'].currentValue ==true) {
      this.ngOnInit()
      this.cerrarModalEv = false
    }
  }
  constructor(private jornadaService:JornadaService,private partidosServ:PartidoService,private utilsServ:UtilsService) { }
  div = (typeof localStorage.getItem("division") == null) ? '0':localStorage.getItem("division")?.valueOf()
  division:number = 0
  listaJornada :any[] = []
  idjornada:number =0
  listaPartidos: PartidoTotal[] = []
  listaJordanas(){
    this.esperaChange(true);
    this.jornadaService.obtieneJornadas().subscribe((data:Jornada)=>{
      this.listaJornada = data.jornadas
      this.esperaChange(false)
    })
  }
  ngOnInit(): void {
    this.div = (typeof localStorage.getItem("division") == null) ? '0':localStorage.getItem("division")?.valueOf()
    this.listaPartidos = []
    this.division = parseInt( this.div == undefined ? '0':this.div)
    this.obtenerPartidos()
    this.listaJordanas()
  }
  obtenerPartidos(){
    this.listaPartidos = []
    if(this.idjornada!=0){
      this.esperaChange(true)
      this.partidosServ.obtenerPartidos(this.idjornada).subscribe((data:PartidosTotalResponse)=>{
          if(data.exito){
            this.listaPartidos = data.partido.filter((element)=>element.local.iddivision == this.division)
          }
          this.esperaChange(false)
      },
      (error:any)=>{
        this.esperaChange(false)
        if(error.status == 403){
          this.utilsServ.mataSesion("Sesión no válida")
        }

    })
    }
  }
  borraPartido(idpartido:number){
    if(confirm("¿Estas seguro de eliminar este partido?")==true){
      var partt = this.listaPartidos.filter((element)=>element.idpartido==idpartido)[0]
      partt.activo = false
      this.actualizarPartido({
        idpartido: partt.idpartido,
        idtemporada:partt.idtemporada,
        idlocal:partt.local.idequipo,
        goleslocal:partt.goleslocal,
        idvisitante:partt.visitante.idequipo,
        golesvisitante:partt.goleslocal,
        fecha:partt.fecha,
        hora:partt.hora,
        cancha:partt.cancha.idcancha,
        idarbitro:partt.arbitro.idarbitro,
        idjornada:partt.idjornada,
        activo:partt.activo,
        idtipopartido:partt.idtipopartido,
        cedula:partt.cedula
      });
    }
  }
  actualizarPartido(part:Partido){
    this.esperaChange(true)
    this.partidosServ.updateDatosPartido(part).subscribe((data:PartidosResposne)=>{
      alert(data.mensaje)
      if(data.exito){

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
  setPartido(idpartido:number){
    var partt = this.listaPartidos.filter((element)=>element.idpartido==idpartido)[0]
    var part:Partido ={
      idpartido: partt.idpartido,
      idtemporada:partt.idtemporada,
      idlocal:partt.local.idequipo,
      goleslocal:partt.goleslocal,
      idvisitante:partt.visitante.idequipo,
      golesvisitante:partt.goleslocal,
      fecha:partt.fecha,
      hora:partt.hora,
      cancha:partt.cancha.idcancha,
      idarbitro:partt.arbitro.idarbitro,
      idjornada:partt.idjornada,
      activo:partt.activo,
      idtipopartido:partt.idtipopartido,
      cedula:partt.cedula
    }
    this.partidoEvent.emit(part)
  }
  setPartidoTotal(part:PartidoTotal){
    this.partidoTotalEvent.emit(part)
  }
}

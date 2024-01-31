import { Component, OnInit ,Output,EventEmitter,Input} from '@angular/core';
import { ArbitrosService } from 'src/app/core/services/arbitro/arbitros.service';
import { ArbitroModel } from 'src/app/core/models/arbitros.models';
import { UtilsService } from 'src/app/core/services/utils/utils.service';

@Component({
  selector: 'app-crear-arbitros',
  templateUrl: './crear-arbitros.component.html',
  styleUrls: ['./crear-arbitros.component.css']
})
export class CrearArbitrosComponent implements OnInit {
  @Output() messageEvent = new EventEmitter<string>();
  @Output() esperaEvent = new EventEmitter<boolean>();
  @Input() arbitro : {idarbitro: number,nombre: string,telefono: string,idliga: number,activo: number} = {"idarbitro":0,"nombre":"","telefono":"","idliga":0,"activo":0}
  mensaje=""
  espera:boolean=false
  sendMessage() {
    this.messageEvent.emit(this.mensaje);
  }
  eventChange(){
    this.espera=!this.espera
    this.esperaEvent.emit(this.espera);
  }
  activaModal(){
    this.sendMessage();
    ($("#infoModal") as any).modal('show')
  }
  constructor(private arbitrosServ:ArbitrosService,private utilsServ:UtilsService) { }
  idLiga = (typeof localStorage.getItem("idLiga") == null) ? '0':localStorage.getItem("idLiga")?.valueOf()
  sesion = (typeof localStorage.getItem("sesion") == null) ? '0':localStorage.getItem("sesion")?.valueOf()
  ngOnInit(): void {
  }
  actualizaArbitro(idArbitro:number,actibo:boolean,telefono:string){
    this.eventChange()
    //console.log(this.listaArbitros.filter((element)=> element.idarbitro==idArbitro)[0].telefono)
    this.arbitrosServ.actualizaArbitros(idArbitro,telefono,actibo).subscribe(
      (data:ArbitroModel)=>{
        console.log(data)
        this.mensaje = data.mensaje;
        this.activaModal()
      },
      (error:any)=>{
        console.log(error)
        if(error.status == 403){
          this.sendMessage()
          this.utilsServ.mataSesion("Sesión no válida")
        }

    }
    )

  }
  creaArbitro(nombre:string,telefono:string){
    this.eventChange()
    //console.log(this.listaArbitros.filter((element)=> element.idarbitro==idArbitro)[0].telefono)
    this.arbitrosServ.creaArbitros(nombre,telefono,parseInt( this.idLiga == undefined ? '0':this.idLiga)).subscribe(
      (data:ArbitroModel)=>{
        console.log(data)
        this.mensaje = data.mensaje;
        this.activaModal()
      },
      (error:any)=>{
        console.log(error)
        if(error.status == 403){
          this.sendMessage()
          this.utilsServ.mataSesion("Sesión no válida")
        }

    }
    )

  }
  SaveUpdArbi(){
    if(this.arbitro.nombre != "" && this.arbitro.telefono!=""){
      if(this.arbitro.idarbitro !=0){
        //Actualiza
        this.actualizaArbitro(this.arbitro.idarbitro,this.arbitro.activo==1,this.arbitro.telefono)
      }else{
        this.creaArbitro(this.arbitro.nombre,this.arbitro.telefono)
      }
    }else{
      this.mensaje = "Ambos campos son obligatorios"
      this.activaModal()
    }
  }


}

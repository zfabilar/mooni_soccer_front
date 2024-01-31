import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { ArbitrosService } from 'src/app/core/services/arbitro/arbitros.service';
import { ArbitroModel } from 'src/app/core/models/arbitros.models';
import { UtilsService } from 'src/app/core/services/utils/utils.service';

@Component({
  selector: 'app-ver-arbitros',
  templateUrl: './ver-arbitros.component.html',
  styleUrls: ['./ver-arbitros.component.css']
})
export class VerArbitrosComponent implements OnInit {
  idLiga = (typeof localStorage.getItem("idLiga") == null) ? '0':localStorage.getItem("idLiga")?.valueOf()
  sesion = (typeof localStorage.getItem("sesion") == null) ? '0':localStorage.getItem("sesion")?.valueOf()
  listaArbitros:any[] = []
  constructor(private arbitrosServ:ArbitrosService,private utilsServ:UtilsService) { }

  ngOnInit(): void {
    this.idLiga = (typeof localStorage.getItem("idLiga") == null) ? '0':localStorage.getItem("idLiga")?.valueOf()
    this.obtenerListaArbitros()
  }
  @Output() messageEvent = new EventEmitter<string>();
  @Output() esperaEvent = new EventEmitter<boolean>();
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
  eliminaArbitro(idArb:number){
    var opcion = confirm("¿Deseas eliminar este arbitro?");
    if (opcion == true) {
      this.actualizaArbitro(idArb,false);
	  }
  }
  @Output() arbiEvent = new EventEmitter<{idarbitro: number,
    nombre: string,
    telefono: string,
    idliga: number,
    activo: number}>();
  modalCA(idArbitro:number){
    this.arbiEvent.emit(this.listaArbitros.filter((element)=> element.idarbitro==idArbitro)[0])
  }
  actualizaArbitro(idArbitro:number,actibo:boolean){
    this.eventChange()
    //console.log(this.listaArbitros.filter((element)=> element.idarbitro==idArbitro)[0].telefono)
    this.arbitrosServ.actualizaArbitros(idArbitro,this.listaArbitros.filter((element)=> element.idarbitro==idArbitro)[0].telefono,actibo).subscribe(
      (data:ArbitroModel)=>{
        this.mensaje = data.mensaje;
        this.activaModal()
      },
      (error:any)=>{
        if(error.status == 403){
          this.sendMessage()
          this.utilsServ.mataSesion("Sesión no válida")
        }

    }
    )

  }
  obtenerListaArbitros(){
    this.eventChange()
    this.arbitrosServ.obtieneArbitros(parseInt( this.idLiga == undefined ? '0':this.idLiga)).subscribe(
      (data:ArbitroModel)=>{
          this.listaArbitros = data.arbitro;
          this.eventChange()
      },
      (error:any)=>{
        if(error.status == 403){
          this.sendMessage()
          this.utilsServ.mataSesion("Sesión no válida")
        }

    }
    )
  }

}

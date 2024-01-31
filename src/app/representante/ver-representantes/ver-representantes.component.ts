import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { UsuarioService } from 'src/app/core/services/usuarios/usuario.service';
import { Usuario } from 'src/app/core/models/usuario.model';
import { UtilsService } from 'src/app/core/services/utils/utils.service';
import { Representante } from 'src/app/core/models/representante.model';
@Component({
  selector: 'app-ver-representantes',
  templateUrl: './ver-representantes.component.html',
  styleUrls: ['./ver-representantes.component.css']
})
export class VerRepresentantesComponent implements OnInit {
  @Output() esperaEvent = new EventEmitter<boolean>();
  esperaChange(msj:boolean){
    this.esperaEvent.emit(msj)
  }
  idLiga = (typeof localStorage.getItem("idLiga") == null) ? '0':localStorage.getItem("idLiga")?.valueOf()
  sesion = (typeof localStorage.getItem("sesion") == null) ? '0':localStorage.getItem("sesion")?.valueOf()
  constructor(private usrServ:UsuarioService,private utilsServ:UtilsService) { }
  representantes:Representante[] = []
  ngOnInit(): void {
    this.idLiga = (typeof localStorage.getItem("idLiga") == null) ? '0':localStorage.getItem("idLiga")?.valueOf()
    this.sesion = (typeof localStorage.getItem("sesion") == null) ? '0':localStorage.getItem("sesion")?.valueOf()
    this.obtieneRepresentantes()
  }
  liberaRepresentanteDeEquipo(idUs:number){
    var rep = this.representantes.filter((element)=> element.id==idUs);
    if(rep[0].equipo == undefined){
      alert("Este representante no tiene equipo asignado")
    }else{
      var opcion = confirm("¿Deseas liberar este representante del equipo "+rep[0].equipo.nombre+"?");
      if (opcion == true) {
        this.liberaRep(idUs);
	    }
    }
  }
  liberaRep(idUs:number){
    this.esperaChange(true)
    setTimeout(() =>{
      this.usrServ.liberaRep(idUs).subscribe((data:{mensaje: string,exito:boolean})=>{
          alert(data.mensaje)
            this.esperaChange(false)
            this.ngOnInit()
          // Aquí puedes poner el código que deseas ejecutar después de la pausa de 3 segundos
      },(error:any)=>{
        if(error.status == 403){
          this.utilsServ.mataSesion("Sesión no válida")
        }else{
          console.log(error)
          alert("Error desconocido!"+error.message)
        }
        this.esperaChange(false)
    })
  }, 500);
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
  @Output() repEvent = new EventEmitter<Representante>();
  modalCA(idRep:number){
    this.repEvent.emit(this.representantes.filter((element)=> element.id==idRep)[0])
  }
}

import { Component, OnInit,Output,EventEmitter,Input } from '@angular/core';
import { Representante } from 'src/app/core/models/representante.model';
import { UsuarioService } from 'src/app/core/services/usuarios/usuario.service';
import { UtilsService } from 'src/app/core/services/utils/utils.service';
import { WPService } from 'src/app/core/services/whatsapp/wp.service';
@Component({
  selector: 'app-crear-representante',
  templateUrl: './crear-representante.component.html',
  styleUrls: ['./crear-representante.component.css']
})
export class CrearRepresentanteComponent implements OnInit {
  nombre:string =""
  telefono:string=""
  mensaje:string=""
  exito:boolean=true
  exitoCrear:boolean=false
  pwd:string = "";
  usr:string = "";
  @Input() representante : Representante= {id:0,nickname:"",pass: "",tipo: 0,nombreCompleto : "",idliga: 0,telefono: "",equipo:{idequipo:0,nombre: "",fechaingreso: "",colorplayera : "",iddivision: 0,idrepresentante: 0,activo:false}}
  @Output() esperaEvent = new EventEmitter<boolean>();
  esperaChange(msj:boolean){
    this.esperaEvent.emit(msj)
  }

  @Output() messageEvent = new EventEmitter<string>();
  sendMessage() {
    this.messageEvent.emit(this.mensaje);
  }
  constructor(private usuarioServ:UsuarioService,private utilsServ:UtilsService,private wpServ:WPService) { }
  idLiga = (typeof localStorage.getItem("idLiga") == null) ? '0':localStorage.getItem("idLiga")?.valueOf()
  ngOnInit(): void {
  }
  guardar(){
    this.esperaChange(true);
    this.pwd = this.utilsServ.generatePassword(8);
    this.usr = this.utilsServ.generateUser(this.representante.nombreCompleto);
    this.usuarioServ.crearUsuario(this.usr,this.pwd,3,this.representante.nombreCompleto,parseInt( this.idLiga == undefined ? '0':this.idLiga),this.representante.telefono).
    subscribe((data:{mensaje: string,exito: boolean})=>{
        this.exito=data.exito
        if(data.exito){
          alert(data.mensaje)
          this.exitoCrear=data.exito
          this.wpServ.enviarMensaje("Tus credenciales para la liga son:\nuser: "+
          this.usr+"\npassword: "+this.pwd+"\n accede en el siguiente sitio: https://mooni-soccer-front.onrender.com/",this.representante.telefono).subscribe()
        }else{
          this.mensaje = data.mensaje
        }
        this.esperaChange(false);
      },(error:any)=>{
        if(error.status == 403){
          this.utilsServ.mataSesion("Sesión no válida")
        }
    })
  }
  actualizaRep(idArbitro:number,telefono:string){
    this.esperaChange(true)
    //console.log(this.listaArbitros.filter((element)=> element.idarbitro==idArbitro)[0].telefono)
    this.usuarioServ.actualizaTelefono(idArbitro,telefono,3).subscribe(
      (data:{mensaje: string,exito: boolean})=>{
        this.mensaje = data.mensaje;
        this.wpServ.enviarMensaje("Se actualizó tu telefono de representante: accede "+
        "a https://mooni-soccer-front.onrender.com/ para ingresar con tu usuario y contraseña actual",this.representante.telefono).subscribe()
        this.esperaChange(false)
        this.utilsServ.desActivaModal("modalCrearRep")
        this.sendMessage()
      },
      (error:any)=>{
        console.log(error)
        if(error.status == 403){
          this.utilsServ.mataSesion("Sesión no válida")
        }
        this.esperaChange(false)

    }
    )

  }
  SaveUpdRep(){
    if(this.representante.nombreCompleto != "" && this.representante.telefono!=""){
      if(this.representante.id !=0){
        //Actualiza
        this.actualizaRep(this.representante.id,this.representante.telefono)
      }else{
        this.guardar()
      }
    }else{
      this.exito = false
      this.mensaje = "Ambos campos son obligatorios"
    }
  }
  vacia(){
    this.exito=true
    this.exitoCrear=false
    this.mensaje=""
    this.nombre=""
    this.telefono=""
    this.usr=""
    this.pwd=""
  }

}

import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { Partido } from 'src/app/core/models/partido.model';
@Component({
  selector: 'app-crear-partido-modal',
  templateUrl: './crear-partido-modal.component.html',
  styleUrls: ['./crear-partido-modal.component.css']
})
export class CrearPartidoModalComponent implements OnInit {
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
  activo:false,
  idtipopartido:0,
  cedula:false
  }
  constructor() { }

  ngOnInit(): void {

  }
  @Output() esperaEvent = new EventEmitter<boolean>();
  esperaChange(msj:boolean){
    this.esperaEvent.emit(msj)
  }
  @Output() cerrarModalEv = new EventEmitter<boolean>();
  cerrarModal(){
    this.cerrarModalEv.emit(true);
    ($("#modalCP") as any).modal('hide')
  }

}

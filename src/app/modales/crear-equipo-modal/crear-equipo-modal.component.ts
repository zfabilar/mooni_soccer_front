import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { Equipo } from 'src/app/core/models/equipo.models';
@Component({
  selector: 'app-crear-equipo-modal',
  templateUrl: './crear-equipo-modal.component.html',
  styleUrls: ['./crear-equipo-modal.component.css']
})
export class CrearEquipoModalComponent implements OnInit {
  @Output() esperaEvent = new EventEmitter<boolean>();
  esperaChange(msj:boolean){
    this.esperaEvent.emit(msj)
  }
  @Output() messageEvent = new EventEmitter<string>();
  sendMessageInfo(msj:string){
    this.messageEvent.emit(msj)
  }
  @Input() equipo:Equipo = {idequipo:0,nombre: "",fechaingreso: "",colorplayera : "",iddivision: 0,idrepresentante: 0,activo:false}
  constructor() { }

  ngOnInit(): void {
  }

}

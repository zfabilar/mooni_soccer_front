import { Component, OnInit,Output,EventEmitter,Input } from '@angular/core';
import { Representante } from 'src/app/core/models/representante.model';
@Component({
  selector: 'app-crear-representante-modal',
  templateUrl: './crear-representante-modal.component.html',
  styleUrls: ['./crear-representante-modal.component.css']
})
export class CrearRepresentanteModalComponent implements OnInit {
  @Output() esperaEvent = new EventEmitter<boolean>();
  esperaChange(msj:boolean){
    this.esperaEvent.emit(msj)
  }
  @Input() representante : Representante= {id:0,nickname:"",pass: "",tipo: 0,nombreCompleto : "",idliga: 0,telefono: "",equipo:{idequipo:0,nombre: "",fechaingreso: "",colorplayera : "",iddivision: 0,idrepresentante: 0,activo:false}}
  constructor() { }

  ngOnInit(): void {
  }

}

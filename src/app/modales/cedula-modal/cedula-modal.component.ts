import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { PartidoTotal } from 'src/app/core/models/partidoTotal.models';

@Component({
  selector: 'app-cedula-modal',
  templateUrl: './cedula-modal.component.html',
  styleUrls: ['./cedula-modal.component.css']
})
export class CedulaModalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }
  @Input() partTotal:PartidoTotal={idpartido: 0,idtemporada:0,
    local:{idequipo:null,nombre: "",fechaingreso: "",colorplayera : "",iddivision: 0,idrepresentante: 0,activo:false},
    replocal: {idUsuario:0,nickname:"",pass: "",tipo: 0,nombreCompleto : "",idliga: 0,telefono: ""},
    goleslocal:0,
    visitante:{idequipo:null,nombre: "",fechaingreso: "",colorplayera : "",iddivision: 0,idrepresentante: 0,activo:false},
    repVisitante: {idUsuario:0,nickname:"",pass: "",tipo: 0,nombreCompleto : "",idliga: 0,telefono: ""},
    golesvisitante:0,fecha:"",hora:"",
    cancha:{idcancha: 0,nombre:"",ubicacion:"",idliga:0,activo:false},
    arbitro:{idarbitro: 0,nombre: "",telefono: "",idliga: 0,activo: 0}  ,
    idjornada:0,activo:false,idtipopartido:0,cedula:false
  }

}

import { Component, OnInit ,Output,EventEmitter, Input} from '@angular/core';
import { Representante } from 'src/app/core/models/representante.model';

@Component({
  selector: 'app-main-home',
  templateUrl: './main-home.component.html',
  styleUrls: ['./main-home.component.css']
})
export class MainHomeComponent implements OnInit {
  menuOption:string=""
  constructor() { }
  @Output() messageEvent = new EventEmitter<string>();
  sendMessageInfo(msj:string){
    this.messageEvent.emit(msj)
  }
  @Output() esperaEvent = new EventEmitter<boolean>();
  esperaChange(msj:boolean){
    this.esperaEvent.emit(msj)
  }
  @Output() repEvent = new EventEmitter<Representante>();
  @Input() division =0;
  ngOnInit(): void {
  }
  cambiaOpc(opc:string){
    this.menuOption =opc;
  }
  representante : Representante= {id:0,nickname:"",pass: "",tipo: 0,nombreCompleto : "",idliga: 0,telefono: "",equipo:{idequipo:0,nombre: "",fechaingreso: "",colorplayera : "",iddivision: 0,idrepresentante: 0,activo:false}}

  updateRep(arb:any){
    this.repEvent.emit(arb)
    this.representante = arb
  }


}

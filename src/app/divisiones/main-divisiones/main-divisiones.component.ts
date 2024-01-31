import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-main-divisiones',
  templateUrl: './main-divisiones.component.html',
  styleUrls: ['./main-divisiones.component.css']
})
export class MainDivisionesComponent implements OnInit {
  menuOption :string = ""
  @Output() messageEvent = new EventEmitter<string>();
  sendMessageInfo(msj:string){
    this.messageEvent.emit(msj)
  }
  @Output() esperaEvent = new EventEmitter<boolean>();
  esperaChange(msj:boolean){
    this.esperaEvent.emit(msj)
  }
  constructor() { }

  ngOnInit(): void {
  }
  cambiaOpc(opc:string){
    this.menuOption =opc;
  }

}

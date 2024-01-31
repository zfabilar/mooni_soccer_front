import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-main-arbitros',
  templateUrl: './main-arbitros.component.html',
  styleUrls: ['./main-arbitros.component.css']
})
export class MainArbitrosComponent implements OnInit {
  menuOption:string = ""
  @Output() messageEvent = new EventEmitter<string>();
  sendMessageInfo(msj:string){
    this.messageEvent.emit(msj)
  }
  @Output() esperaEvent = new EventEmitter<boolean>();
  esperaChange(msj:boolean){
    this.esperaEvent.emit(msj)
  }
  @Output() arbiEvent = new EventEmitter<{idarbitro: number,
    nombre: string,
    telefono: string,
    idliga: number,
    activo: number}>();

  arbitro:{idarbitro: number,
    nombre: string,
    telefono: string,
    idliga: number,
    activo: number} = {"idarbitro":0,"nombre":"","telefono":"","idliga":0,"activo":0}
  constructor() { }

  ngOnInit(): void {
  }
  cambiaOpc(opc:string){
    this.menuOption =opc;
  }
  updateArbi(arb:any){
    this.arbiEvent.emit(arb)
    this.arbitro = arb
  }

}

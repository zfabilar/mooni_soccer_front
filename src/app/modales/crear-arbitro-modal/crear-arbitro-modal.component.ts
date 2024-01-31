import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-crear-arbitro-modal',
  templateUrl: './crear-arbitro-modal.component.html',
  styleUrls: ['./crear-arbitro-modal.component.css']
})
export class CrearArbitroModalComponent implements OnInit {
  @Input() arbitro : {idarbitro: number,nombre: string,telefono: string,idliga: number,activo: number} = {"idarbitro":0,"nombre":"","telefono":"","idliga":0,"activo":0}
  @Output() messageEvent = new EventEmitter<string>();
  sendMessageInfo(msj:string){
    this.messageEvent.emit(msj)
  }
  constructor() { }

  ngOnInit(): void {
  }

}

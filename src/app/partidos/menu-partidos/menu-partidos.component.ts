import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-menu-partidos',
  templateUrl: './menu-partidos.component.html',
  styleUrls: ['./menu-partidos.component.css']
})
export class MenuPartidosComponent implements OnInit {
  @Output()  newItemEvent = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }
  cambiaOpc(opc: string){
    this.newItemEvent.emit(opc);
  }

}

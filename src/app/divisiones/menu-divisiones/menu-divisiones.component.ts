import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-menu-divisiones',
  templateUrl: './menu-divisiones.component.html',
  styleUrls: ['./menu-divisiones.component.css']
})
export class MenuDivisionesComponent implements OnInit {
  @Output()  newItemEvent = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }
  cambiaOpc(opc: string){
    this.newItemEvent.emit(opc);
  }
}

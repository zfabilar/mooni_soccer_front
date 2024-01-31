import { Component, OnInit ,Output,EventEmitter} from '@angular/core';
@Component({
  selector: 'app-menu-equipo',
  templateUrl: './menu-equipo.component.html',
  styleUrls: ['./menu-equipo.component.css']
})
export class MenuEquipoComponent implements OnInit {
  @Output()  newItemEvent = new EventEmitter<string>();
  @Output() esperaEvent = new EventEmitter<boolean>();
  esperaChange(msj:boolean){
    this.esperaEvent.emit(msj)
  }
  constructor() { }

  ngOnInit(): void {
  }
  cambiaOpc(opc: string){
    this.newItemEvent.emit(opc);
  }

}

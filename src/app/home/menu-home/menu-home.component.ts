import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-menu-home',
  templateUrl: './menu-home.component.html',
  styleUrls: ['./menu-home.component.css']
})
export class MenuHomeComponent implements OnInit {
  @Output()  newItemEvent = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }
  cambiaOpc(opc: string){
    console.log(opc,localStorage.getItem("division"))
    if(opc.match("ver-tabla") && (localStorage.getItem("division")=="" || localStorage.getItem("division")==null)){
      ($("#modalSelectDiv") as any).modal('show')
    }else{
        this.newItemEvent.emit(opc);
    }
  }
}

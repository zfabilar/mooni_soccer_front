import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-partidos',
  templateUrl: './main-partidos.component.html',
  styleUrls: ['./main-partidos.component.css']
})
export class MainPartidosComponent implements OnInit {
  menuOption:string =""
  constructor() { }

  ngOnInit(): void {
  }
  cambiaOpc(opc:string){
    this.menuOption =opc;
  }
}

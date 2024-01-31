import { Component, OnInit ,Output,EventEmitter,Input} from '@angular/core';
import { Equipo } from 'src/app/core/models/equipo.models';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  menuOption = "home"
  @Output() messageEvent = new EventEmitter<string>();
  sendMessageInfo(msj:string){
    this.messageEvent.emit(msj)
  }
  @Output() esperaEvent = new EventEmitter<boolean>();
  esperaChange(msj:boolean){
    this.esperaEvent.emit(msj)
  }
  @Output() teamEvent = new EventEmitter<Equipo>();
  @Input() division =0;
  team:Equipo = {idequipo:0,nombre: "",fechaingreso: "",colorplayera : '#000022',iddivision: 0,idrepresentante: 0,activo:false}
  constructor() { }

  ngOnInit(): void {
  }
  cambiaOpc(opc:string){
    this.menuOption =opc;
  }
  updateTeam(arb:any){
    this.team = arb
    this.teamEvent.emit(arb)
    this.team = arb
  }

}

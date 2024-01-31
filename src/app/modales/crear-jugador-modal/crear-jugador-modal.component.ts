import { Component, OnInit,Output,EventEmitter,Input } from '@angular/core';

@Component({
  selector: 'app-crear-jugador-modal',
  templateUrl: './crear-jugador-modal.component.html',
  styleUrls: ['./crear-jugador-modal.component.css']
})
export class CrearJugadorModalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Output() cerrarModalEv = new EventEmitter<boolean>();
  cerrarModal(){
    this.cerrarModalEv.emit(true);
    ($("#modalCrearJug") as any).modal('hide')
  }
  @Input() idTeam:number|null = 0
}

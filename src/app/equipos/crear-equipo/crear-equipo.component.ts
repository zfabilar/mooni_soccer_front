import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crear-equipo',
  templateUrl: './crear-equipo.component.html',
  styleUrls: ['./crear-equipo.component.css']
})
export class CrearEquipoComponent implements OnInit {
  representante = "selecciona"
  constructor() { }

  ngOnInit(): void {
  }
  volverSeleccion(seleccion:string){
    console.log(seleccion)
    if(this.representante == "crear"){
      this.representante = "selecciona"
    }
    console.log(this.representante)
  }
  guardar(){
    alert(this.representante)
  }
}

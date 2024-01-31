import { Equipo } from "./equipo.models";
export interface Representante{
  id:number,nickname:string,pass: string,tipo: number,nombreCompleto : string,idliga: number,telefono: string,equipo:Equipo
}

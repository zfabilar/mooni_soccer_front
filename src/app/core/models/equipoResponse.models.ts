import { Equipo } from "./equipo.models";
export interface EquipoResponse{
  mensaje: string,
  exito: boolean,equipo:Equipo[],equipos:Equipo[]
}

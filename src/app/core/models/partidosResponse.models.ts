import { Partido } from "./partido.model"
export interface PartidosResposne{
  mensaje: string,
  exito: boolean,
  partido:Partido[]
}

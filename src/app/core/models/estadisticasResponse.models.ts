import { Estadisticas } from "./estadisticas.models";
export interface EstadisticasResponse{
  mensaje: string,
  exito: boolean,
  estadisticas:Estadisticas[]
}

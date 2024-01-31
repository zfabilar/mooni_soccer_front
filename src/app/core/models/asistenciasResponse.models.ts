import { Asistencia } from "./asistencias.models";
export interface AsistenciaResponse{
  exito: boolean,
  mensaje: string,
  asistencias: Asistencia[]
}

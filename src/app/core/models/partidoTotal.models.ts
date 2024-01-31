import { Equipo } from "./equipo.models"
import { Usuario } from "./usuario.model"
import { Cancha } from "./cancha.models"
export interface PartidoTotal{
  idpartido: number,
  idtemporada:number,
  local:Equipo,
  replocal: Usuario,
  goleslocal:number,
  visitante:Equipo,
  repVisitante: Usuario
  golesvisitante:number,
  fecha:string,
  hora:string,
  cancha:Cancha,
  arbitro:{idarbitro: number,
    nombre: string,
    telefono: string,
    idliga: number,
    activo: number}  ,
  idjornada:number,
  activo:boolean,
  idtipopartido:number,
  cedula:boolean
}

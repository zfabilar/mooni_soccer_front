import {PartidoTotal} from '../models/partidoTotal.models'
export interface PartidosTotalResponse{
  mensaje: string,
  exito: boolean,
  partido:PartidoTotal[]
}

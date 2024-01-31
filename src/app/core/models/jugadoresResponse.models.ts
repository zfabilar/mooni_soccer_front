import { Jugador } from "./jugador.models";
export interface JugadorResponse{
  mensaje: string,
  exito: boolean,jugadores:Jugador[]
}

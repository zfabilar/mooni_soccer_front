export interface configLiga{
  exito: boolean,
  mensaje: string,
  config:{
    idconfig: number,
    idliga: number,
    cantidadmaxequipos: number,
    equiposregistrados: number,
    fechainiciomembresia: number,
    fechafinmembresia: number,
    cantmaxplayersbyteam: number
  }
}

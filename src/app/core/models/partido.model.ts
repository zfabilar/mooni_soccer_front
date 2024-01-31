export interface Partido{
  idpartido: number,
  idtemporada:number,
  idlocal:number|null,
  goleslocal:number,
  idvisitante:number|null,
  golesvisitante:number,
  fecha:string,
  hora:string,
  cancha:number,
  idarbitro:number,
  idjornada:number,
  activo:boolean,
  idtipopartido:number,
  cedula:boolean
}

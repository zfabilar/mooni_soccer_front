export interface ArbitroModel{
  exito: boolean,
  mensaje: string,
  arbitro:[
      idarbitro: number,
      nombre: string,
      telefono: string,
      idliga: number,
      activo: number
  ]
  }

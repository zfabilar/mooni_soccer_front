export interface Temporada{
  "exito": boolean,
  "mensaje": string,
  "temporada": {
      "idtemporada": number,
      "nombre": string,
      "actual": boolean,
      "fechainicio": string,
      "fechafin": string,
      "campeon": number,
      "idliga": number
  }
}

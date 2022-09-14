
export type TipoAlumno = 'rut'| 'nombreAlumno'| 'apellidoAlumno' | 'edadAlumno' | 'alumnoSeccion';
export interface Historial {
  fecha: Date;
  hisorialAlumno: TipoAlumno;
}

import { Component, Input } from '@angular/core';
import { Alumno } from './../../modelos/alumno';
import { Seccion } from './../../modelos/seccion';
@Component({
  selector: 'app-lista-alumno',
  templateUrl: './lista-alumno.component.html',
  styleUrls: ['./lista-alumno.component.scss']
})
export class ListaAlumnoComponent  {
  @Input() Alumnos!: Array<Alumno>;
  @Input() Secciones!: Array<Seccion>;



}

import { Component, Input } from '@angular/core';
import { Alumno } from './../../modelos/alumno';
import { Seccion } from 'src/app/modelos/seccion';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.scss']
})
export class AlumnosComponent  {
  @Input() public alumno!: Alumno;
  @Input() public seccion!: Seccion;


}

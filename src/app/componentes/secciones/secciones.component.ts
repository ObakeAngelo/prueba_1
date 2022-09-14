import { Component, Input } from '@angular/core';
import { Seccion } from 'src/app/modelos/seccion';
@Component({
  selector: 'app-secciones',
  templateUrl: './secciones.component.html',
  styleUrls: ['./secciones.component.scss']
})
export class SeccionesComponent  {

  @Input() public seccion!: Seccion;
}

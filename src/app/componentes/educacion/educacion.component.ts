import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  tituloEducacion = "Educación";
  nombreInstitucion = "Ministerio de Desarrollo y Producción de la Nación";
  nombrePrograma = "Argentina Programa - Primera Etapa #SéProgramar";
  fechaInicio = "07/2021";
  fechaFin = "11/2021";
  nombreTituloObtenido="Conceptos básicos de javascript y Ruby";

  constructor() { }

  ngOnInit(): void {
  }

}

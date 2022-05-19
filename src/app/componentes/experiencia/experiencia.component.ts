import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  tituloExperiencia = "Experiencia";
  lugarEmpresa = "Claro Argentina";
  sectorPuesto = "Ventas de Salon y Atencion al cliente";
  fechaInicio= "2015";
  fechaFin= "2021";
  descripcionResponsabilidades = "Asesor comercial";


  constructor() { }

  ngOnInit(): void {
  }

}

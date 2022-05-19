import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sobre-mi',
  templateUrl: './sobre-mi.component.html',
  styleUrls: ['./sobre-mi.component.css']
})
export class SobreMiComponent implements OnInit {

  titulo = "Sobre mí";
  parrafoDescripcion= " ¡Hola!, Mí nombre es Martín, tengo 37 años, vivo en Buenos Aires. Hace aproximadamente tres años comencé a realizar cursos de lenguajes y Lógica de Programación en diferentes plataformas e instituciones, también de forma autodidacta. Actualmente estudio Desarrollo Web Full Stack Jr. 'Argentina Programa' impartido por el Ministerio de Desarrollo de la Nación. tambien Principiante en Programacion 'ONE' (Alura Latam y Oracle).Soy resilente a los cambios, me gusta mucho el trabajo en equipo, me motiva sumarme a nuevos desafíos, tengo inmensas ganas de seguir aprendiendo.";

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  nombreProyecto = "Proyecto: Barbería Alura";
  descripcion = "Complete el proyecto de Alura Latam y Oracle, dentro del curso ONE en donde creamos un sitio web desde cero de una Barbería. Se divide en tres paginas -Home-Productos-Contac to- con HTML5 y CSS3. Utilizamos recursos externos como Google maps, y videos para capturar la atención de nuestro cliente.";
  linkProyecto= "";
  linkVideoPRoyecto = "";
  

  constructor() { }

  ngOnInit(): void {
  }

}

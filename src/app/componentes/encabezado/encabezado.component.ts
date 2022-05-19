import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../../servicios/portfolio.service';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {
  //funcion que llama al boton agregar
  //agregaNomApellido(value:String){}
  //como comente property binding angular de la forma mas resumida posible
  //descomento nombreApellido pero con campo vacio
  
  nombreApellido = "Martín Maldonado";
  cambiaNombreYApellido(event: Event) {
    //aca hacemos el casting----> (<HTMLInputElement>event.target).value
    //el archivo va del template al ts
    this.nombreApellido=(<HTMLInputElement>event.target).value;
  }

  tituloRegistroDeUsuario = "Registro de usuarios";
  
  edad = 37;
  titulo= "Desarrollador Web FullStack Jr.(Estudiante)";
  descripcion = "Realizando la segunda etapa del Curso </Argentina Programa>";
  email = "martinmarcelomaldonado1985@gmail.com";
  celular = 1154049276;
  foto = [];

  //aca comenze a crear el binding
  usuarioRegistrado = false;

  textoDeRegistroUsuario = "No hay nadie registrado";

  getRegistroUsuario() {
    this.usuarioRegistrado = false;
  }

  setUsuarioRegistrado(event: Event) {
    if ((<HTMLInputElement>event.target).value == "si") {
      this.textoDeRegistroUsuario = "¡Felicitaciones!. Se registro correctamente su usuario";
    } else {
      this.textoDeRegistroUsuario = "No hay nadie registrado";
    }
    //alert(event.target);
    //this.textoDeRegistroUsuario = "¡Felicitaciones!. Se registro correctamente su usuario";
    //alert("El usuario se registro correctamente");
  }

  constructor() { }

  ngOnInit(): void {
    
  }

}

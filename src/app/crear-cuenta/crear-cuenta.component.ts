import { Component, OnInit } from '@angular/core';

import { UsuariosService } from '../services/usuarios.service';
import { Router } from '@angular/router';

import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-crear-cuenta',
  templateUrl: './crear-cuenta.component.html',
  styleUrls: ['./crear-cuenta.component.css']
})
export class CrearCuentaComponent implements OnInit {

  formulario:any;
  error:boolean;

  @Output()
  onLogeado = new EventEmitter<boolean>();
  onRegistrado = new EventEmitter<boolean>();

  constructor(private _usuarios:UsuariosService,
    private _router: Router) {
    this.formulario = {
      user: {
        name: "",
        email: "",
        password: "",
        password_confirmation: ""
      }
    };
  }


  ngOnInit() {
  }

  crearCuenta(){
  	this._usuarios
  		.crearCuenta(this.formulario)
  		.subscribe(
  			respuesta => {
  				let autenticacion = {
  					auth:{
  						email: this.formulario.user.email,
  						password: this.formulario.user.password
  					}
  				};
          this.onRegistrado.emit(true);
          this.iniciarSesion(autenticacion);
  			},
  			error => {
  				console.log(error);
  			}
  		);
  }

  iniciarSesion(autenticacion) {
    this._usuarios
      .obtenerToken(autenticacion)
      .subscribe(
        respuesta => {
          localStorage.setItem("SessionToken", respuesta.jwt);
          this.error = false;
          this.onLogeado.emit(true);
        },
        error => {
          this.error = true;
          console.log(error);
        }
      );
  }

}

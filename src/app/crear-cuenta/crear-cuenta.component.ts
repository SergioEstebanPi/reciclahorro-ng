import { Component, OnInit } from '@angular/core';

import { UsuariosService } from '../services/usuarios.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-cuenta',
  templateUrl: './crear-cuenta.component.html',
  styleUrls: ['./crear-cuenta.component.css']
})
export class CrearCuentaComponent implements OnInit {

  formulario:any;
  error:boolean;

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
  	//console.log(this.formulario);
  	this._usuarios
  		.crearCuenta(this.formulario)
  		.subscribe(
  			respuesta => {
  				//console.log(respuesta);
  				let autenticacion = {
  					auth:{
  						email: this.formulario.user.email,
  						password: this.formulario.user.password
  					}
  				};
          this.iniciarSesion(autenticacion);
  				//this._usuarios.iniciarSesion(autenticacion);
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
          console.log("Token generado");
          this._usuarios.buscarUsuario();
          this.error = false;
          this._router.navigate(['/']);
        },
        error => {
          this.error = true;
          console.log(error);
        }
      );
  }

}

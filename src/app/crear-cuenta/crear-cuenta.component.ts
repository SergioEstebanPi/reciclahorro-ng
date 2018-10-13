import { Component, OnInit } from '@angular/core';

import { UsuariosService } from '../services/usuarios.service';
import { Router } from '@angular/router';

import { Output, EventEmitter } from '@angular/core';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-crear-cuenta',
  templateUrl: './crear-cuenta.component.html',
  styleUrls: ['./crear-cuenta.component.css']
})
export class CrearCuentaComponent implements OnInit {

  formulario:any;
  error:boolean;

  constructor(private _usuarios:UsuariosService,
    private _router: Router,
    public activeModal: NgbActiveModal) {
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
          //this.iniciarSesion(autenticacion);
          this.activeModal.close(autenticacion);
  			},
  			error => {
  				console.log(error);
  			}
  		);
  }



}

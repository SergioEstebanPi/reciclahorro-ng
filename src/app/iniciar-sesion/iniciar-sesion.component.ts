import { Component, OnInit } from '@angular/core';


import { Router } from '@angular/router';
import { UsuariosService } from '../services/usuarios.service';

import { Output, EventEmitter } from '@angular/core';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
	selector: 'app-iniciar-sesion',
	templateUrl: './iniciar-sesion.component.html',
	styleUrls: ['./iniciar-sesion.component.css']
})
export class IniciarSesionComponent {
	formulario: any;
	error:boolean;

	constructor(private _usuarios: UsuariosService,
		private _router: Router,
		public activeModal: NgbActiveModal) {
		this.formulario = {
			auth: {
				email: "",
				pasword: ""
			}
		};
	}

	ngOnInit() {
	}

	  iniciarSesion() {
	  	this.error = false;
	    this._usuarios
	      .obtenerToken(this.formulario)
	      .subscribe(
	        respuesta => {
	          localStorage.setItem("SessionToken", respuesta.jwt);
	          this.error = false;
	          this.activeModal.close(this.formulario);
	        },
	        error => {
	          this.error = true;
	          console.log(error);
	        }
	      );
	  }
}

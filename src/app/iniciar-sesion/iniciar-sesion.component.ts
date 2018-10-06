import { Component, OnInit } from '@angular/core';


import { Router } from '@angular/router';
import { UsuariosService } from '../services/usuarios.service';

import { Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-iniciar-sesion',
	templateUrl: './iniciar-sesion.component.html',
	styleUrls: ['./iniciar-sesion.component.css']
})
export class IniciarSesionComponent implements OnInit {

	formulario: any;
	error:boolean;

	@Output()
	onLogeado = new EventEmitter<boolean>()

	constructor(private _usuarios: UsuariosService,
		private router: Router) {
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
		this._usuarios
			.obtenerToken(this.formulario)
			.subscribe(
				respuesta => {
					localStorage.setItem("SessionToken", respuesta.jwt);
					console.log("Token generado");
					this.onLogeado.emit(true);
					//this._usuarios.buscarUsuario();
					this.error = false;
					
					
				},
				error => {
					this.error = true;
					console.log(error);
				}
			);
	}
}

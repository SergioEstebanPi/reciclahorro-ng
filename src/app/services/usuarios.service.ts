import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

import { Globals } from '../globals';

@Injectable({
	providedIn: 'root'
})
export class UsuariosService {

	private url: string;
	private encabezados: any;

	constructor(private http: HttpClient,
		private _router: Router,
		private _globals:Globals) {
		//this.url = "https://reciclahorro-api.herokuapp.com";
		//this.url = "http://localhost:3000";
		this.url = _globals.url;
		this.encabezados = {
			headers: new HttpHeaders(
				{
					"Content-Type": "application/json"
				}

			)
		};

	}

	obtenerToken(autenticacion): Observable<any> {
		let urlAutenticacion = this.url + "user_token";
		let parametros = JSON.stringify(autenticacion);
		return this.http.post<any>(
			urlAutenticacion,
			parametros,
			this.encabezados
		);
	}

	crearCuenta(usuario): Observable<any> {
		let urlCrearCuenta = this.url + "users";
		let parametros = JSON.stringify(usuario);
		return this.http.post<any>(
			urlCrearCuenta,
			parametros,
			this.encabezados
		);
	}

	usuarioActual(): Observable<any> {
		let urlUsuario = this.url + "users/current";
		let encabezadosToken = {
			headers: new HttpHeaders(
				{
					"Content-Type": "application/json",
					"Authorization": "Bearer " + localStorage.getItem("SessionToken")
				}
			)
		};
		return this.http.get<any>(
			urlUsuario,
			encabezadosToken
		);
	}

	cerraSesion(): Observable<any> {
		let urlCerrarSesion = this.url + "logout";
		return this.http.post<any>(
			urlCerrarSesion,
			this.encabezados
		);
	}
}

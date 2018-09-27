import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class UsuariosService {

	private url: string;
	private encabezados: any;
	public usuario: BehaviorSubject<Object> = new BehaviorSubject<Object>(false);

	constructor(private http: HttpClient,
		private _router: Router) {
		this.url = "http://reciclahorro-api.herokuapp.com";
		this.encabezados = {
			headers: new HttpHeaders(
				{
					"Content-Type": "application/json"
				}

			)
		};

	}

	obtenerToken(autenticacion): Observable<any> {
		let urlAutenticacion = this.url + "/user_token";
		let parametros = JSON.stringify(autenticacion);
		return this.http.post<any>(
			urlAutenticacion,
			parametros,
			this.encabezados
		);
	}

	crearCuenta(usuario): Observable<any> {
		let urlCrearCuenta = this.url + "/users";
		let parametros = JSON.stringify(usuario);
		return this.http.post<any>(
			urlCrearCuenta,
			parametros,
			this.encabezados
		);
	}

	buscarUsuario(){
		if (localStorage.getItem("SessionToken")) {
				this.usuarioActual()
					.subscribe(
						respuesta => {
							this.usuario.next(respuesta);
							this._router.navigate(['/']);
						},
						error => {
							console.log(error);
						}
					);
		} else {
			this.usuario.next(null);
		}
	}

	usuarioActual(): Observable<any> {
		let urlUsuario = this.url + "/users/current";
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
}

import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Globals } from '../globals';


@Injectable({
  providedIn: 'root'
})
export class OfertasService {

  url:string;
	encabezados:any;
	ofertas:Array<any>;

  constructor(private http:HttpClient,
    private _globals:Globals) {
  	//this.url = "https://reciclahorro-api.herokuapp.com/ofertas";
    //this.url = "http://localhost:3000/ofertas";
    this.url = _globals.url + 'ofertas';
  	this.encabezados = {
  		headers: new HttpHeaders(
		  	{
		  		"Content-Type": "application/json",
		  		"Authorization": "Bearer " + localStorage.getItem("SessionToken")
		  	}
	  	)
  	};
  }

  /* GET index */
  traerOfertas():Observable<any>{
  	return this.http.get<any>(
  			this.url,
  			this.encabezados
  	);
  }

  /* GET show */
  mostrarOferta(id):Observable<any>{
  	let urlOferta = this.url + "/" + id;
  	return this.http.get<any>(
  		urlOferta,
  		this.encabezados
  	);
  }

  /* POST create */
  crearOferta(oferta){
  	return this.http.post<any>(
  		this.url,
  		oferta,
  		this.encabezados
  	);
  }

  /* PUT update */
  modificarOferta(oferta){
  	return this.http.put<any>(
  		this.url,
  		oferta,
  		this.encabezados
  	);
  }

  /* DELETE destroy */
  eliminarOferta(id){
  	let urlOferta = this.url + "/" + id;
  	return this.http.delete<any>(
  		urlOferta,
  		this.encabezados
  	);
  }
}

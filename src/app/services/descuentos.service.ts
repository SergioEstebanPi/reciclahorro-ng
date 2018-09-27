import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DescuentosService {

  url:string;
	encabezados:any;
	descuentos:Array<any>;

  constructor(private http:HttpClient) {
  	this.url = "http://reciclahorro-api.herokuapp.com/descuentos";
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
  traerDescuentos():Observable<any>{
  	return this.http.get<any>(
  			this.url,
  			this.encabezados
  	);
  }

  /* GET show */
  mostrarDescuento(id):Observable<any>{
  	let urlDescuento = this.url + "/" + id;
  	return this.http.get<any>(
  		urlDescuento,
  		this.encabezados
  	);
  }

  /* POST create */
  crearDescuento(descuento){
  	return this.http.post<any>(
  		this.url,
  		descuento,
  		this.encabezados
  	);
  }

  /* PUT update */
  modificarDescuento(descuento){
  	return this.http.put<any>(
  		this.url,
  		descuento,
  		this.encabezados
  	);
  }

  /* DELETE destroy */
  eliminarDescuento(id){
  	let urlDescuento = this.url + "/" + id;
  	return this.http.delete<any>(
  		urlDescuento,
  		this.encabezados
  	);
  }
}

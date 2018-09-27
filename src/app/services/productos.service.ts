import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  url:string;
  encabezados:any;
  productos:Array<any>;

  constructor(private http:HttpClient) {
  	this.url = "http://reciclahorro-api.herokuapp.com/productos";
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
  traerProductos():Observable<any>{
  	return this.http.get<any>(
  			this.url,
  			this.encabezados
  	);
  }

  /* GET show */
  mostrarProducto(id):Observable<any>{
  	let urlProducto = this.url + "/" + id;
  	return this.http.get<any>(
  		urlProducto,
  		this.encabezados
  	);
  }

  /* POST create */
  crearProducto(producto){
  	return this.http.post<any>(
  		this.url,
  		producto,
  		this.encabezados
  	);
  }

  /* PUT update */
  modificarProducto(producto){
	let urlProducto = this.url + '/' + producto.id;
  	return this.http.put<any>(
  		urlProducto,
  		producto,
  		this.encabezados
  	);
  }

  /* DELETE destroy */
  eliminarProducto(id){
  	let urlProducto = this.url + "/" + id;
  	return this.http.delete<any>(
  		urlProducto,
  		this.encabezados
  	);
  }
}

import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Globals } from '../globals';

@Injectable({
  providedIn: 'root'
})
export class ResiduosService {

 	url:string;
	encabezados:any;
	residuos:Array<any>;

  constructor(private http:HttpClient,
    private _globals:Globals) {
  	//this.url = "https://reciclahorro-api.herokuapp.com/residuos";
    //this.url = "http://localhost:3000/residuos";
    this.url = _globals.url + 'residuos';
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
  traerResiduos():Observable<any>{
  	return this.http.get<any>(
  			this.url,
  			this.encabezados
  	);
  }

  /* GET show */
  mostrarResiduo(id):Observable<any>{
  	let urlresiduo = this.url + "/" + id;
  	return this.http.get<any>(
  		urlresiduo,
  		this.encabezados
  	);
  }

  /* POST create */
  crearResiduo(residuo){
  	return this.http.post<any>(
  		this.url,
  		residuo,
  		this.encabezados
  	);
  }

  /* PUT update */
  modificarResiduo(residuo){
  	return this.http.put<any>(
  		this.url,
  		residuo,
  		this.encabezados
  	);
  }

  /* DELETE destroy */
  eliminarResiduo(id){
  	let urlresiduo = this.url + "/" + id;
  	return this.http.delete<any>(
  		urlresiduo,
  		this.encabezados
  	);
  }
}

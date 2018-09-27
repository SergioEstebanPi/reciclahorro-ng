import { Component, OnInit } from '@angular/core';

import { DescuentosService } from '../services/descuentos.service';

@Component({
  selector: 'app-traer-descuentos',
  templateUrl: './traer-descuentos.component.html',
  styleUrls: ['./traer-descuentos.component.css']
})
export class TraerDescuentosComponent implements OnInit {

  descuentos:Array<any>;

  constructor(private _descuentos:DescuentosService) {
	this.traerDescuentos();
	/*
	this.descuentos = [{
  		//id: "",
  		titulo: "",
      descripcion: "",
      porcentaje: ""
	  }];
	  */
  }

  ngOnInit() {
    //this.traerDescuentos();
  }

  traerDescuentos(){
  	this._descuentos.traerDescuentos()
  		.subscribe(
  			respuesta => {
  				//console.log(respuesta);
  				this.descuentos = respuesta;
  			},
  			error => {
  				console.log(error);
  			}
  		);
  }

  mostrarDescuento(id){
  	this._descuentos.mostrarDescuento(id)
  		.subscribe(
  			respuesta => {
  				console.log(respuesta);
  				//this.traerDescuentos();
  			},
  			error => {
  				console.log();
  			}
  		);
  }

  crearDescuento(descuento){
  	this._descuentos.crearDescuento(descuento)
  		.subscribe(
  			respuesta => {
  				console.log(respuesta);
  				//this.traerDescuentos();
  			},
  			error => {
  				console.log();
  			}
  		);
  }

  eliminaDescuento(id){
  	let confirmacion = confirm("Estas seguro?");
  	if(confirmacion){
	  	this._descuentos.eliminarDescuento(id)
	  		.subscribe(
	  			respuesta => {
	  				//console.log(respuesta);
	  				this.traerDescuentos();
	  			},
	  			error => {
	  				console.log();
	  			}
	  		);
  	}
  }

}

import { Component, OnInit } from '@angular/core';

import { ProductosService } from '../services/productos.service';
@Component({
  selector: 'app-traer-productos',
  templateUrl: './traer-productos.component.html',
  styleUrls: ['./traer-productos.component.css']
})
export class TraerProductosComponent implements OnInit {

  productos:Array<any>;

  constructor(private _productos:ProductosService) {
    this.productos = [{
  		//id: "",
  		nombre: "",
      descripcion: ""
  	}];
  }

  ngOnInit() {
    this.traerProductos();
  }

  traerProductos(){
  	this._productos.traerProductos()
  		.subscribe(
  			respuesta => {
  				//console.log(respuesta);
  				this.productos = respuesta;
  			},
  			error => {
  				console.log(error);
  			}
  		);
  }

  mostrarProducto(id){
  	this._productos.mostrarProducto(id)
  		.subscribe(
  			respuesta => {
  				console.log(respuesta);
  				//this.traerProductos();
  			},
  			error => {
  				console.log();
  			}
  		);
  }

  eliminaProducto(id){
  	let confirmacion = confirm("Estas seguro?");
  	if(confirmacion){
	  	this._productos.eliminarProducto(id)
	  		.subscribe(
	  			respuesta => {
	  				//console.log(respuesta);
	  				this.traerProductos();
	  			},
	  			error => {
	  				console.log();
	  			}
	  		);
  	}
  }

}

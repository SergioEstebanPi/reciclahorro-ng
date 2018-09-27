import { Component, OnInit } from '@angular/core';

import {  ProductosService } from '../services/productos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css']
})
export class CrearProductoComponent implements OnInit {

	producto:any;

  constructor(private _productos:ProductosService,
  						private _router:Router) {
  	this.producto = {
  		nombre: "",
  		descripcion: ""
  	};
  }

  ngOnInit() {
  }

  crearProducto(){
		this._productos.crearProducto(this.producto)
			.subscribe(
				respuesta => {
					this._router.navigate(["/traer-productos"]);
					//console.log(respuesta);
				},
				error => {
					console.log(error);
				}
		);
  }

}
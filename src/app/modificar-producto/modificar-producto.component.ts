import { Component, OnInit } from '@angular/core';

import { ProductosService } from '../services/productos.service';
import { ActivatedRoute, Router } from '@angular/router';

import { TraerProductosComponent } from '../traer-productos/traer-productos.component';

@Component({
  selector: 'app-modificar-producto',
  templateUrl: './modificar-producto.component.html',
  styleUrls: ['./modificar-producto.component.css']
})
export class ModificarProductoComponent implements OnInit {

	producto:any;

  constructor(private _productos:ProductosService,
  						private _ruta:ActivatedRoute,
  						private _router:Router) {
  	this.producto = {
  		//id: "",
  		nombre: "",
  		descripcion: ""
  	};
  }

  ngOnInit() {
  	this._ruta.params.subscribe(
  		respuesta => {
  			this._productos.mostrarProducto(respuesta['id'])
	  			.subscribe(
	  				respuesta => {
	  					//console.log(respuesta);
	  					this.producto = respuesta;
	  				},
	  				error => {
	  					console.log(error);
	  				}
	  			);
  			//console.log(respuesta);
  		},
  		error => {
  			console.log(error);
  		}
  	);
  }


  modificarProducto(){
  	this._productos.modificarProducto(this.producto)
  		.subscribe(
  			respuesta => {
          console.log(respuesta);
          this._router.navigate(['/traer-productos']);
  				//this._router.navigate(['/mostrar_producto', respuesta['id']]);
  				//console.log(respuesta);
  			},
  			error => {
  				console.log(error);
  			}
  		);
  }
}
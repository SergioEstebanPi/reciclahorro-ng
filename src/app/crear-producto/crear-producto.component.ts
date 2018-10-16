import { Component, OnInit } from '@angular/core';

import {  ProductosService } from '../services/productos.service';
import { Router } from '@angular/router';

import { Globals } from '../globals';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css']
})
export class CrearProductoComponent implements OnInit {

	producto:any;
  error:boolean;
  imagenProducto:any;

  constructor(private _productos:ProductosService,
  						private _router:Router,
              private _globals:Globals) {
  	this.producto = {
  		nombre: "",
  		descripcion: "",
      imagen: "",
      dataimagen: ""
  	};
    this.imagenProducto = this._globals.imgdefault;
    //this.producto.imagen = this._globals.url + "44_supermarket_cart_shopping_item_add_product-512.png";
  }

  ngOnInit() {
  }

  onSelectFile(event) { // called each time file input changes
      if (event.target.files && event.target.files[0]) {
        let file = event.target.files[0];
        let reader = new FileReader();
        reader.readAsDataURL(file); // read file as data url
        reader.onload = (event) => { // called once readAsDataURL is completed
          this.imagenProducto = reader.result;
          this.producto.imagen = file.name;
          this.producto.dataimagen = this.imagenProducto.replace(/^data:image\/(png|jpg|jpeg);base64,/, '');
        };
      }
  }

  crearProducto(){
		this._productos.crearProducto(this.producto)
			.subscribe(
				respuesta => {
          this.error = false;
          alert('Producto creado correctamente');
          this.producto = respuesta;
          console.log(this.producto);
					//this._router.navigate(["/traer-productos");
					//console.log(respuesta);
				},
				error => {
          this.error = true;
					console.log(error);
				}
		);
  }



}
import { Component, OnInit } from '@angular/core';

import { ProductosService } from '../services/productos.service';
import { ActivatedRoute, Router } from '@angular/router';

import { TraerProductosComponent } from '../traer-productos/traer-productos.component';

import { Globals } from '../globals';

@Component({
  selector: 'app-modificar-producto',
  templateUrl: './modificar-producto.component.html',
  styleUrls: ['./modificar-producto.component.css']
})
export class ModificarProductoComponent implements OnInit {

	producto:any;
  error:boolean;
  imagenProducto:any;
  url:string;

  constructor(private _productos:ProductosService,
  						private _ruta:ActivatedRoute,
  						private _router:Router,
              private _globals:Globals) {
    this.url = _globals.url
  	this.producto = {
  		//id: "",
  		nombre: "",
  		descripcion: "",
      imagen: "",
      dataimagen: ""
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
              if(this.producto.imagen){
                this.imagenProducto = this.url + this.producto.imagen;
              } else {
                this.imagenProducto = this._globals.imgdefault;
              }
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


  modificarProducto(){
  	this._productos.modificarProducto(this.producto)
  		.subscribe(
  			respuesta => {
          this.error = false;
          console.log(respuesta);
          alert('Producto modificado correctamente');
          this.producto = respuesta;
          //this._router.navigate(['/traer-productos']);
  				//this._router.navigate(['/mostrar_producto', respuesta['id']]);
  				//console.log(respuesta);
  			},
  			error => {
          this.error = true;
  				console.log(error);
  			}
  		);
  }
}
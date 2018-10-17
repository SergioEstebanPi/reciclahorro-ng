import { Component, OnInit } from '@angular/core';

import { ProductosService } from '../services/productos.service';
import  { Globals } from '../globals';


@Component({
  selector: 'app-traer-productos',
  templateUrl: './traer-productos.component.html',
  styleUrls: ['./traer-productos.component.css']
})
export class TraerProductosComponent implements OnInit {

  productos:Array<any>;
  frase:string;
  //_productos:ProductosService;
  url:string;
  imgdefault:string;

  constructor(private _productos:ProductosService,
    private _globals:Globals) {
    //this._productos = _productosService;
    this.productos = [];
    this.url = this._globals.url;
    this.imgdefault = this._globals.imgdefault;
    /*
    this.productos = [{
  		//id: "",
  		nombre: "",
      descripcion: "",
      imagen: "",
      dataimagen: ""
  	}];
    */
  }

  ngOnInit() {
    this.traerProductos();
  }


  onKey(event:any){
    this.frase = event.target.value;
    //console.log(this.frase);
    /*
    if (this.frase && this.frase.trim() != '') {
      this.ofertas = this.ofertas.filter(
        (item) => {
          return (item.titulo.toLowerCase().indexOf(this.frase.toLowerCase()) > -1);
        }
      );
      //console.log(this.ofertas);
    } else {
      this.traerOfertas();
    }
    */
    this.traerProductos();

  }    


  traerProductos(){
  	this._productos.traerProductos()
  		.subscribe(
  			respuesta => {
  				//console.log(respuesta);
          //this.productos = respuesta;
          if (this.frase && this.frase.trim() != '') {
            this.productos = this.productos.filter(
              (item) => {
                return (item.nombre.toLowerCase().indexOf(this.frase.toLowerCase()) > -1);
              }
            );
          } else {
            this.productos = respuesta;
          }
  				//this.productos = respuesta;
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

  eliminarProducto(id){
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

import { Component, OnInit } from '@angular/core';

import { OfertasService } from '../services/ofertas.service';
import { UsuariosService } from '../services/usuarios.service';

import { Globals } from '../globals';

@Component({
  selector: 'app-traer-ofertas',
  templateUrl: './traer-ofertas.component.html',
  styleUrls: ['./traer-ofertas.component.css']
})
export class TraerOfertasComponent implements OnInit {

  ofertas:Array<any>;
  logeado: boolean;
  loading:boolean;
  frase:string;
  _ofertas:OfertasService;
  
  public isCollapsed = true;
    url:string;



  constructor(private _ofertasServices:OfertasService,
    private _usuarios: UsuariosService,
    private _globals: Globals) {
    this._ofertas = _ofertasServices;
    this.ofertas = [];
    this.url = _globals.url;
    /*
    this.ofertas = [{
  		//id: "",
  		titulo: "",
  		descripcion: "",
      residuo: "",
      almacen_id: "",
  	}];
    */
  }

  ngOnInit() {
    this.loading = true;
    if (localStorage.getItem("SessionToken")){
      //alert("ud tiene token");
      this.logeado = true;
    } else {
      //alert("ud no tiene token");
      this.logeado = false;
    }
    this.traerOfertas();
    /*
    this._usuarios
      .buscarUsuario();
    this._usuarios
      .usuario
      .subscribe(
        respuesta => {
          this.usuario = respuesta;
        },
        error => {
          console.log(error);
        }
      );
    this.traerOfertas();
    */
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
    this.traerOfertas();

  }

  traerOfertas(){
    this._ofertas.traerOfertas()
  		.subscribe(
  			respuesta => {
  				//console.log(respuesta);
          if (this.frase && this.frase.trim() != '') {
            this.ofertas = respuesta.filter(
              (item) => {
                return (item.titulo.toLowerCase().indexOf(this.frase.toLowerCase()) > -1);
              }
            );
          } else {
            this.ofertas = respuesta;
          }          

          this.loading = false;
  			},
  			error => {
  				console.log(error);
  			}
  		);
  }

  mostrarOferta(id){
  	this._ofertas.mostrarOferta(id)
  		.subscribe(
  			respuesta => {
  				console.log(respuesta);
  				//this.traerOfertas();
  			},
  			error => {
  				console.log();
  			}
  		);
  }

  crearOferta(oferta){
  	this._ofertas.crearOferta(oferta)
  		.subscribe(
  			respuesta => {
  				console.log(respuesta);
  				//this.traerofertas();
  			},
  			error => {
  				console.log();
  			}
  		);
  }

  eliminarOferta(id){
  	let confirmacion = confirm("Estas seguro?");
  	if(confirmacion){
	  	this._ofertas.eliminarOferta(id)
	  		.subscribe(
	  			respuesta => {
	  				//console.log(respuesta);
	  				this.traerOfertas();
	  			},
	  			error => {
	  				console.log();
	  			}
	  		);
  	}
  }

}

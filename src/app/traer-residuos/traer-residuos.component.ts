import { Component, OnInit } from '@angular/core';

import { ResiduosService } from '../services/residuos.service';

@Component({
  selector: 'app-traer-residuos',
  templateUrl: './traer-residuos.component.html',
  styleUrls: ['./traer-residuos.component.css']
})
export class TraerResiduosComponent implements OnInit {

	residuos:any;

  constructor(private _residuos:ResiduosService) { 
  	this.residuos = [];
  }

  ngOnInit() {
  	this.traerResiduos();
  }

  traerResiduos(){
    this._residuos.traerResiduos()
  		.subscribe(
  			respuesta => {
  				//console.log(respuesta);
  				this.residuos = respuesta;
  			},
  			error => {
  				console.log(error);
  			}
  		);
  }

  mostrarResiduo(id){
  	this._residuos.mostrarResiduo(id)
  		.subscribe(
  			respuesta => {
  				console.log(respuesta);
  				//this.traerresiduos();
  			},
  			error => {
  				console.log();
  			}
  		);
  }

  crearResiduo(residuo){
  	this._residuos.crearResiduo(residuo)
  		.subscribe(
  			respuesta => {
  				console.log(respuesta);
  				//this.traerresiduos();
  			},
  			error => {
  				console.log();
  			}
  		);
  }

  eliminarResiduo(id){
  	let confirmacion = confirm("Estas seguro?");
  	if(confirmacion){
	  	this._residuos.eliminarResiduo(id)
	  		.subscribe(
	  			respuesta => {
	  				//console.log(respuesta);
	  				this.traerResiduos();
	  			},
	  			error => {
	  				console.log();
	  			}
	  		);
  	}
  }

}

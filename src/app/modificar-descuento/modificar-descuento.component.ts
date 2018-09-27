import { Component, OnInit } from '@angular/core';

import { DescuentosService } from '../services/descuentos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modificar-descuento',
  templateUrl: './modificar-descuento.component.html',
  styleUrls: ['./modificar-descuento.component.css']
})
export class ModificarDescuentoComponent implements OnInit {

	descuento:any;

  constructor(private _descuentos:DescuentosService,
  	private _router:Router) {
  	this.descuento = {
  		//id: "",
  		tiulo: "",
  		descripcion: "",
  		porcentaje: "",
  		almacen_id: ""
  	};
  }

  ngOnInit() {
  }

  modificarDescuento(){
  	this._descuentos.modificarDescuento(this.descuento)
  		.subscribe(
  			respuesta => {
          console.log(respuesta);
          this._router.navigate(['/traer-descuentos']);
  				//this._router.navigate(['/mostrar_producto', respuesta['id']]);
  				//console.log(respuesta);
  			},
  			error => {
  				console.log(error);
  			}
  		);
  }

}

import { Component, OnInit } from '@angular/core';

import { DescuentosService } from '../services/descuentos.service';
import { UsuariosService } from '../services/usuarios.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-descuento',
  templateUrl: './crear-descuento.component.html',
  styleUrls: ['./crear-descuento.component.css']
})
export class CrearDescuentoComponent implements OnInit {

	descuento:any;

  constructor(private _descuentos:DescuentosService,
    private _usuarios:UsuariosService,
  	private _router:Router) {
  	this.descuento = {
			titulo: "",
      descripcion: "",
      porcentaje: "",
      almacen_id: ""
  	}
  }

  ngOnInit() {
  }

  crearDescuento(){
    this._usuarios.usuario.subscribe(
      respuesta => {
        this.descuento.almacen_id = respuesta['id'];
      },
      error =>{
        console.log(error);
      }
    );
		this._descuentos.crearDescuento(this.descuento)
			.subscribe(
				respuesta => {
					this._router.navigate(["/traer-descuentos"]);
					//console.log(respuesta);
				},
				error => {
					console.log(error);
				}
		);
  }
}

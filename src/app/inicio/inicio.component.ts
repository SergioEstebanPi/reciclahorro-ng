import { Component, OnInit } from '@angular/core';

import { UsuariosService } from '../services/usuarios.service';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { IniciarSesionComponent } from '../iniciar-sesion/iniciar-sesion.component';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

	modalRef:any;
  	iniciarSesion:boolean;
  	crearCuenta:boolean;
  
	constructor(private _usuarios: UsuariosService,
		private _modal: NgbModal,
		//private _iniciarsesion:
		) {

	}

	ngOnInit() {
	}

	openIniciarSesion() {
		this.modalRef = this._modal.open(IniciarSesionComponent);
		//this.modalRef.componentInstance.name = 'World';
		this.modalRef.result
		.then(
		  (result) => {
		   //console.log(result);
		   this.iniciarSesion = true;
		   //this._iniciarsesion.iniciarSesion();
		   //this.buscarUsuario();
		   //this.iniciarSesion(result);
		 }
		).catch(
		 (error) => {
		   //console.log(error);
		 }
		);
  	}
/*
  	buscarUsuario(){
	    this._usuarios.usuarioActual()
	      .subscribe(
	        respuesta => {
	          this.usuario = respuesta;
	          this.logeado = true;
	          if (this.iniciarSesion || this.crearCuenta) {
	            this.onLogeado.emit(true);
	            this.iniciarSesion = false;
	            this.crearCuenta = false;
	          }
	          //this.modalRef2 = this._modal.open(NgbdModalContent);
	          //this._router.navigateByUrl('/');
	        },
	        error => {
	          console.log(error);
	        }
	      );
  	}
*/
	
}

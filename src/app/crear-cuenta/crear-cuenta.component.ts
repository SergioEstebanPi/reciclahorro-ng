import { Component, OnInit } from '@angular/core';

import { UsuariosService } from '../services/usuarios.service';
import { Router } from '@angular/router';

import { Output, EventEmitter } from '@angular/core';

import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Input } from '@angular/core';

@Component({
  selector: 'ngbd-modal-content',
  template: `
    <div class="modal-header">
      <h4 class="modal-title">Bienvenido!</h4>
      <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <p>Hola {{ name }}. Gracias por registrarte con nosotros</p>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-outline-dark" (click)="activeModal.close('Close click')">Aceptar</button>
    </div>
  `
})
export class NgbdModalContent {
  @Input() name;

  constructor(public activeModal: NgbActiveModal) {
  }
}

@Component({
  selector: 'app-crear-cuenta',
  templateUrl: './crear-cuenta.component.html',
  styleUrls: ['./crear-cuenta.component.css']
})
export class CrearCuentaComponent implements OnInit {

  formulario:any;
  error:boolean;

  modalRef:any;

  constructor(private _usuarios:UsuariosService,
    private _router: Router,
    public activeModal: NgbActiveModal,
    private _modal: NgbModal) {
    this.formulario = {
      user: {
        name: "",
        email: "",
        password: "",
        password_confirmation: ""
      }
    };
  }


  ngOnInit() {
  }

  crearCuenta(){
    this.error = false;
  	this._usuarios
  		.crearCuenta(this.formulario)
  		.subscribe(
  			respuesta => {
  				let autenticacion = {
  					auth:{
  						email: this.formulario.user.email,
  						password: this.formulario.user.password
  					}
  				};
          //this.iniciarSesion(autenticacion);
          //this.activeModal.close(autenticacion);
          this.iniciarSesion(autenticacion);
  			},
  			error => {
          this.error = true;
  				console.log(error);
  			}
  		);
  }

  iniciarSesion(autenticacion) {
    this._usuarios
      .obtenerToken(autenticacion)
      .subscribe(
        respuesta => {
          localStorage.setItem("SessionToken", respuesta.jwt);
          this.error = false;
          this.activeModal.close();
          this.modalRef = this._modal.open(NgbdModalContent);
          //this.buscarUsuario();
        },
        error => {
          this.error = true;
          console.log(error);
        }
      );
  }



}

import { Component, OnInit } from '@angular/core';

import { UsuariosService } from '../services/usuarios.service';
import { Router } from '@angular/router';
import { Observable } from '../../../node_modules/rxjs';

import { Input } from '@angular/core';

import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { IniciarSesionComponent } from '../iniciar-sesion/iniciar-sesion.component';

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
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {
  logeado:boolean;
  error:boolean;
  usuario:any;
  mostrar:boolean;

  modalRef:any;

  constructor(private _usuarios: UsuariosService,
    private _router: Router,
    private _modal: NgbModal) {
      this.usuario = {
        nombre: "",
        email: ""
      };
      this.logeado = false;
      this.error = false;
  }

  ngOnInit() {
    if(localStorage.getItem("SessionToken") != null){
      this.buscarUsuario();
    } else {
      this._router.navigateByUrl('/');
    }
  }

  ngAfterViewInit(){
    /*
    setTimeout(() => {
      this.open();
    });
    */
  }

  open() {
    this.modalRef = this._modal.open(IniciarSesionComponent);
    //this.modalRef.componentInstance.name = 'World';
    this.modalRef.result
      .then(
          (result) => {
           //console.log(result);
           this.buscarUsuario();
         }
       ).catch(
         (error) => {
           console.log(error);
         }
      );
  }

  buscarUsuario(){
    this._usuarios.usuarioActual()
      .subscribe(
        respuesta => {
          this.usuario = respuesta;
          this.logeado = true;
          this._router.navigateByUrl('/');
        },
        error => {
          console.log(error);
        }
      );
  }

  cerrarSesion() {
    localStorage.removeItem('SessionToken');
    this.usuario = null;
    this.logeado = false;
    this._router.navigateByUrl('/');
  }
}

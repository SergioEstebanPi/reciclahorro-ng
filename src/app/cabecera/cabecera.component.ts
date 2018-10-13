import { Component, OnInit } from '@angular/core';

import { UsuariosService } from '../services/usuarios.service';
import { Router } from '@angular/router';
import { Observable } from '../../../node_modules/rxjs';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { IniciarSesionComponent } from '../iniciar-sesion/iniciar-sesion.component';
import { CrearCuentaComponent } from '../crear-cuenta/crear-cuenta.component';


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

  openIniciarSesion() {
    this.modalRef = this._modal.open(IniciarSesionComponent);
    //this.modalRef.componentInstance.name = 'World';
    this.modalRef.result
      .then(
          (result) => {
           //console.log(result);
           this.buscarUsuario();
           //this.iniciarSesion(result);
         }
       ).catch(
         (error) => {
           //console.log(error);
         }
      );
  }

  openCrearCuenta(){
    this.modalRef = this._modal.open(CrearCuentaComponent);
    //this.modalRef.componentInstance.name = 'World';
    this.modalRef.result
      .then(
          (result) => {
           //console.log(result);
           //this.iniciarSesion(result);
           this.buscarUsuario();
         }
       ).catch(
         (error) => {
           //this.modalRef.componentInstance.name = 'World';
           //console.log(error);
         }
      );
  }

  buscarUsuario(){
    this._usuarios.usuarioActual()
      .subscribe(
        respuesta => {
          this.usuario = respuesta;
          this.logeado = true;
          //this.modalRef2 = this._modal.open(NgbdModalContent);
          //this._router.navigateByUrl('/');
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

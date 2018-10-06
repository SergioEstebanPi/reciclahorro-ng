import { Component, OnInit } from '@angular/core';

import { UsuariosService } from '../services/usuarios.service';
import { Router } from '@angular/router';
import { Observable } from '../../../node_modules/rxjs';

import { Input } from '@angular/core';
@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {
  //autenticado:Observable<boolean>;
  //usuario: any;
  logeado:boolean;
  error:boolean;
  formulario: any;
  usuario:any;

  constructor(private _usuarios: UsuariosService,
    private router: Router) {
      this.usuario = {
        nombre: "",
        email: ""
      }
    /*
      this.usuario = {
        nombre: "",
        email: ""
      }
      this._usuarios
      .usuario
      .subscribe(
        respuesta => {
          this.usuario = respuesta;
          console.log(respuesta);
        },
        error => {
          console.log(error);
        }
      );
      */
      this.logeado = false;
      this.error = false;
  }

  ngOnInit() {
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
     */
     //alert("init");
     //this.logeado = this._usuarios.isLogeado();
     this.logeado = localStorage.getItem("SessionToken") != null;
     this.formulario = {
        auth: {
          email: "",
          pasword: ""
        }
      };
      this.obtenerUsuario();
     
  }

  iniciarSesion() {
    this._usuarios
      .obtenerToken(this.formulario)
      .subscribe(
        respuesta => {
          localStorage.setItem("SessionToken", respuesta.jwt);
          console.log("Token generado");
          this.logeado = true;
          this.error = false;
          this.obtenerUsuario();
          //this.router.navigateByUrl('/');
        },
        error => {
          this.error = true;
          console.log(error);
        }
      );
  } 

  obtenerUsuario(){
    this._usuarios.usuarioActual()
      .subscribe(
        respuesta => {
          this.usuario = respuesta;
          //this.usuario.next(respuesta);
          //this.logeado = true;
          this.router.navigateByUrl('/');
        },
        error => {
          console.log(error);
          this.usuario = null;
        }
    );
  }

  cerrarSesion() {
    localStorage.removeItem('SessionToken');
    //this.usuario = null;
   // this._usuarios.usuario.next(null);
    this.logeado = false;
    //this.router.navigate(['/']);
    this.router.navigateByUrl('/');
  }
}

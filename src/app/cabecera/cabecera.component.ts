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
  logeado:boolean;
  error:boolean;
  usuario:any;

  constructor(private _usuarios: UsuariosService,
    private _router: Router) {
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

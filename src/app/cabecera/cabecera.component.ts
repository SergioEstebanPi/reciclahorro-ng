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
  usuario: any;

  constructor(private _usuarios: UsuariosService,
    private router: Router) {
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
  }

  ngOnInit() {
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
  }

  cerrarSesion() {
    localStorage.removeItem('SessionToken');
    //this.usuario = null;
    this._usuarios.usuario.next(null);
    this.router.navigate(['/']);
  }
}

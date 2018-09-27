import { Component, OnInit } from '@angular/core';

import { UsuariosService } from '../services/usuarios.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  usuario: any;
  
  constructor(private _usuarios: UsuariosService) {

  }

  ngOnInit() {
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

}

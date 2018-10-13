import { Injectable } from '@angular/core';

@Injectable()
export class Globals {
  //url:string = 'https://reciclahorro-api.herokuapp.com/';
  url: string = 'http://localhost:3000/';
  ADMINISTRADOR:string = '0';
  VECINO:string = '1';
  ALMACEN:string = '2';
  
}
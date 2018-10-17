import { Component } from '@angular/core';

import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  	title = 'reciclahorro-ng';
  	url = '';
    staticAlertClosed = true;

    constructor() {
    }

    mostrarSuccess(){
    	this.staticAlertClosed = false;
		  setTimeout(() => this.staticAlertClosed = true, 5000);
    }

    mostrarAlert(){

    }
}

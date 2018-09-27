import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';

import { RouterModule, Routes} from '@angular/router';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { PiedepaginaComponent } from './piedepagina/piedepagina.component';
import { CrearCuentaComponent } from './crear-cuenta/crear-cuenta.component';
import { IniciarSesionComponent } from './iniciar-sesion/iniciar-sesion.component';
import { TraerOfertasComponent } from './traer-ofertas/traer-ofertas.component';

import { FormsModule } from '@angular/forms';
import { UsuariosService } from './services/usuarios.service';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { SessionGuard } from './guards/session.guard';
import { CrearOfertaComponent } from './crear-oferta/crear-oferta.component';
import { ModificarOfertaComponent } from './modificar-oferta/modificar-oferta.component';
import { TraerDescuentosComponent } from './traer-descuentos/traer-descuentos.component';
import { TraerProductosComponent } from './traer-productos/traer-productos.component';
import { CrearProductoComponent } from './crear-producto/crear-producto.component';
import { ModificarProductoComponent } from './modificar-producto/modificar-producto.component';
import { CrearDescuentoComponent } from './crear-descuento/crear-descuento.component';
import { ModificarDescuentoComponent } from './modificar-descuento/modificar-descuento.component';

const rutas:Routes=[
  {path:"", component:InicioComponent},
  {path:"inicio", component:InicioComponent},
  {path:"iniciar_sesion", component:IniciarSesionComponent},
  {path:"crear_cuenta", component:CrearCuentaComponent},
  {path:"traer-ofertas", component:TraerOfertasComponent},
  {path:"crear-oferta", component:CrearOfertaComponent},
  {path:"modificar-oferta/:id", component:ModificarOfertaComponent},
  {path:"traer-descuentos", component:TraerDescuentosComponent},
  {path:"crear-descuento", component:CrearDescuentoComponent},
  {path:"modificar-descuento/:id", component:ModificarDescuentoComponent},
  {path:"traer-productos", component:TraerProductosComponent},
  {path:"crear-producto", component:CrearProductoComponent},
  {path:"modificar-producto/:id", component:ModificarProductoComponent},
  {path:"*", redirectTo:'/', pathMatch:'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    CabeceraComponent,
    PiedepaginaComponent,
    CrearCuentaComponent,
    IniciarSesionComponent,
    TraerOfertasComponent,
    CrearOfertaComponent,
    ModificarOfertaComponent,
    TraerDescuentosComponent,
    TraerProductosComponent,
    CrearProductoComponent,
    ModificarProductoComponent,
    CrearDescuentoComponent,
    ModificarDescuentoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(rutas),
    HttpModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    UsuariosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

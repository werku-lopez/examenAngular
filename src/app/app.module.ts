import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './components/home/home.component';
import { MarcasComponent } from './components/marcas/marcas.component';
import { ServiceTienda } from './services/service.tienda';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { routing } from './app.routing';
import { ModeloComponent } from './components/modelo/modelo.component';
import { ComentariosComponent } from './components/comentarios/comentarios.component';
import { FormularioLoginComponent } from './components/formulario-login/formulario-login.component';
import { FormularioSinginComponent } from './components/formulario-singin/formulario-singin.component';
import { SeguridadComponent } from './components/seguridad/seguridad.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { ComprasComponent } from './components/compras/compras.component';
import { NuevacompraComponent } from './components/nuevacompra/nuevacompra.component';
import { LogoutComponent } from './components/logout/logout.component';

@NgModule({
  declarations: [AppComponent, MenuComponent, HomeComponent, MarcasComponent, ModeloComponent, ComentariosComponent, FormularioLoginComponent, FormularioSinginComponent, SeguridadComponent, PerfilComponent, ComprasComponent, NuevacompraComponent, LogoutComponent],
  imports: [BrowserModule, HttpClientModule, FormsModule, routing],
  providers: [ServiceTienda],
  bootstrap: [AppComponent],
})
export class AppModule {}

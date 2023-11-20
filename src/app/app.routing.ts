import { ModuleWithProviders } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { MarcasComponent } from './components/marcas/marcas.component';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';
import { ModeloComponent } from './components/modelo/modelo.component';
import { ComentariosComponent } from './components/comentarios/comentarios.component';
import { FormularioLoginComponent } from './components/formulario-login/formulario-login.component';
import { SeguridadComponent } from './components/seguridad/seguridad.component';
import { FormularioSinginComponent } from './components/formulario-singin/formulario-singin.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { NuevacompraComponent } from './components/nuevacompra/nuevacompra.component';
import { ComprasComponent } from './components/compras/compras.component';
import { LogoutComponent } from './components/logout/logout.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'marca/:marca', component: MarcasComponent },
  { path: 'modelo/:modelo', component: ModeloComponent },
  { path: 'comentarios/:idCubo', component: ComentariosComponent },
  { path: 'logIn', component: FormularioLoginComponent },
  { path: 'signIn', component: FormularioSinginComponent },
  { path: 'seguridad/:token', component: SeguridadComponent },
  { path: 'perfil/:idUsuario/:nombre/:email', component: PerfilComponent },
  { path: 'compras/:idUsuario/:token', component: ComprasComponent },
  { path: 'nueva-compra', component: NuevacompraComponent },
  { path: 'logOut', component: LogoutComponent },
];

export const appRouting: any[] = [];
export const routing: ModuleWithProviders<any> =
  RouterModule.forRoot(appRoutes);

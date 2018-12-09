import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import  {DataTableModule} from 'primeng/components/datatable/datatable';
import { UsuariosComponent } from './usuarios/component/usuarios.component';
import { ClientesComponent } from './clientes/clientes.component';
import {UsuariosRoutingModule} from './usuarios/usuarios-routing.module';
@NgModule({
  declarations: [
    AppComponent,
    UsuariosComponent,
    ClientesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UsuariosRoutingModule,
    DataTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

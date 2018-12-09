import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import {UsuariosComponent} from './component/usuarios.component';

const routes: Routes = [
    {
        path: '',
        component: UsuariosComponent
    }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UsuariosRoutingModule{}

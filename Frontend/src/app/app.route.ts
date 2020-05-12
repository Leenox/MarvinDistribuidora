import {Routes} from '@angular/router'
import { HomeComponent } from './home/home.component'
import { ProdutoComponent } from './produto/produto.component'
import { ClienteComponent } from './cliente/cliente.component'

export const ROUTES: Routes = [
    {path:'', component: HomeComponent},
    {path:'produto', component: ProdutoComponent},
    {path:'cliente', component: ClienteComponent},
]
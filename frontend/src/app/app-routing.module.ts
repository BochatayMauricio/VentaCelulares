import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Components
import { LoginComponent } from './components/login/login.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProductInformationComponent } from './components/product-information/product-information.component';
import { ProductShoppingComponent } from './components/product-shopping/product-shopping.component';

import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { HelpsComponent } from './components/helps/helps.component';

import { PanelAdministradorComponent } from './components/administrador/panel-administrador/panel-administrador.component';
import { ProductosComponent } from './components/administrador/productos/productos.component';
import { AdministratorComponent } from './components/administrador/administrator/administrator.component';
import { VentasComponent } from './components/administrador/ventas/ventas.component';
import { UserPurchasesComponent } from './components/user-purchases/user-purchases.component';
import { CartComponent } from './components/cart/cart.component';
import { PublicationsListComponent } from './components/administrador/publications-list/publications-list.component';






const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signin', component: SignInComponent },


  { path: 'admin', component: PanelAdministradorComponent },
  { path: 'admin/Productos', component: ProductosComponent },
  { path: 'admin/Clientes', component: AdministratorComponent },
  { path: 'admin/Ventas', component: VentasComponent },
  {path:'admin/publications/:id',component: PublicationsListComponent},

  { path: 'dashboard', component: DashboardComponent },
  { path: 'dashboard/helps', component: HelpsComponent },
  { path: 'dashboard/product', component: ProductInformationComponent },
  { path: 'dashboard/shopping/:id', component: ProductShoppingComponent },
  { path: 'dashboard/userPurchases/:dni', component: UserPurchasesComponent },
  { path: 'dashboard/userProfile/:dni', component: UserProfileComponent },
  {path:'dashboard/cart',component: CartComponent},
  { path: '**', redirectTo: 'login', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }




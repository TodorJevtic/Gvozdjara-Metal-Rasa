import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './components/pages/welcome/welcome.component';
import { AboutComponent } from './components/pages/about/about.component';
import { LoginComponent } from './components/pages/login/login.component';
import { RegisterComponent } from './components/pages/register/register.component';
import { AlatiComponent } from './components/pages/alati/alati.component';
import { SanitarijaComponent } from './components/pages/sanitarija/sanitarija.component';
import { RasvetaComponent } from './components/pages/rasveta/rasveta.component';
import { CartPageComponent } from './components/pages/cart-page/cart-page.component';
import { ProizvodPageComponent } from './components/pages/proizvod-page/proizvod-page.component';
import { CheckoutPageComponent } from './components/pages/checkout-page/checkout-page.component';
import { AuthGuard } from './auth/guards/auth.guard';
import { ProfileComponent } from './components/pages/profile/profile.component';

const routes: Routes = [
  { path:'', component:WelcomeComponent},
  { path:'welcome-page', component:WelcomeComponent},
  { path:'about', component:AboutComponent},
  { path:'login', component:LoginComponent},
  { path:'register', component:RegisterComponent},
  { path:'alati', component:AlatiComponent},
  { path:'proizvod/:id', component:ProizvodPageComponent},
  { path:'sanitarija', component:SanitarijaComponent},
  { path:'rasveta', component:RasvetaComponent},
  { path:'cart-page', component:CartPageComponent},
  { path:'checkout', component:CheckoutPageComponent, canActivate:[AuthGuard]},
  { path:'search/:searchTerm', component:AlatiComponent},
  { path:'alati/:id', component:AlatiComponent},
  { path:'rasveta/:id', component:RasvetaComponent},
  { path:'sanitarija/:id', component:SanitarijaComponent},
  { path:'profile', component:ProfileComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { MaterialModule } from './material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/partials/footer/footer.component';
import { WelcomeComponent } from './components/pages/welcome/welcome.component';
import { AboutComponent } from './components/pages/about/about.component';
import { LoginComponent } from './components/pages/login/login.component';
import { RegisterComponent } from './components/pages/register/register.component';
import { AlatiComponent } from './components/pages/alati/alati.component';
import { SanitarijaComponent } from './components/pages/sanitarija/sanitarija.component';
import { RasvetaComponent } from './components/pages/rasveta/rasveta.component';
import { StarRatingModule } from 'angular-star-rating';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { AuthInterceptor } from './auth/guards/auth.interceptor';
import { InputContainerComponent } from './components/partials/input-container/input-container.component';
import { InputValidationComponent } from './components/partials/input-validation/input-validation.component';
import { TextInputComponent } from './components/partials/text-input/text-input.component';
import { DefaultButtonComponent } from './components/partials/default-button/default-button.component';
import { NotFoundComponent } from './components/partials/not-found/not-found.component';
import { CartPageComponent } from './components/pages/cart-page/cart-page.component';
import { ProizvodPageComponent } from './components/pages/proizvod-page/proizvod-page.component';
import { CheckoutPageComponent } from './components/pages/checkout-page/checkout-page.component';
import { OrderItemsListComponent } from './components/partials/order-items-list/order-items-list.component';
import { ProfileComponent } from './components/pages/profile/profile.component';
import { FilterPipe } from './searchPipe/filter.pipe';

@NgModule({
  declarations: [
    AppComponent, 
    FooterComponent,
    WelcomeComponent,
    AboutComponent,
    LoginComponent,
    RegisterComponent,
    AlatiComponent,
    SanitarijaComponent,
    RasvetaComponent,
    InputContainerComponent,
    InputValidationComponent,
    DefaultButtonComponent,
    TextInputComponent,
    NotFoundComponent,
    CartPageComponent,
    ProizvodPageComponent,
    CheckoutPageComponent,
    OrderItemsListComponent,
    ProfileComponent,
    FilterPipe
  ],
  imports: [
    MaterialModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    StarRatingModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      timeOut:3000,
      positionClass: 'toast-bottom-right',
      newestOnTop:false
    })
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS, useClass:AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

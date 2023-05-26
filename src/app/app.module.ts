// // import { NgModule } from '@angular/core';
// // import { BrowserModule } from '@angular/platform-browser';

// // import { AppRoutingModule } from './app-routing.module';
// // import { AppComponent } from './app.component';

// // import { AppComponent } from './app.component';
// // import { ListadoArticulosComponent } from './listado-articulos/listado-articulos.component'; // Importa el componente


// // @NgModule({
//   declarations: [
//     AppComponent,
//     ListadoArticulosComponent
//   ],
//   imports: [
//     BrowserModule,
//     AppRoutingModule
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListadoarticulosComponent } from './listado-articulos/listado-articulos.component'; // Importa el componente

@NgModule({
  declarations: [
    AppComponent,
    ListadoarticulosComponent // Declara el componente
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


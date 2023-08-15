import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router'; // Importe RouterModule

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EstabelecimentoComponent } from './estabelecimento/estabelecimento.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'estabelecimento/listar', component: EstabelecimentoComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    EstabelecimentoComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes) // Configure as rotas aqui
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

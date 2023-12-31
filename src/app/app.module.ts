import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { LancamentosListComponent } from './components/lancamento-list/lancamento-list.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LancamentoInserirModule } from './components/lancamento-inserir/lancamento-inserir.module';
import { LancamentoEditarModule } from './components/lancamento-editar/lancamento-editar.module';




@NgModule({
  declarations: [
    AppComponent,
    LancamentosListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    LancamentoInserirModule,
    LancamentoEditarModule,
   
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

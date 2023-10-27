import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Importe o FormsModule

import { LancamentoEditarComponent } from './lancamento-editar.component';

@NgModule({
  declarations: [LancamentoEditarComponent],
  imports: [CommonModule, FormsModule], // Adicione o FormsModule aqui
})
export class LancamentoEditarModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Importe o FormsModule

import { LancamentoInserirComponent } from './lancamento-inserir.component';

@NgModule({
  declarations: [LancamentoInserirComponent],
  imports: [CommonModule, FormsModule], // Adicione o FormsModule aqui
})
export class LancamentoInserirModule {}

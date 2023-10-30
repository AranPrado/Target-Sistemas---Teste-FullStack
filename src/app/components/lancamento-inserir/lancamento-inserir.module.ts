import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 

import { LancamentoInserirComponent } from './lancamento-inserir.component';

@NgModule({
  declarations: [LancamentoInserirComponent],
  imports: [CommonModule, FormsModule], 
})
export class LancamentoInserirModule {}

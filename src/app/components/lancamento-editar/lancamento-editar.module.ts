import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 

import { LancamentoEditarComponent } from './lancamento-editar.component';

@NgModule({
  declarations: [LancamentoEditarComponent],
  imports: [CommonModule, FormsModule], 
})
export class LancamentoEditarModule {}

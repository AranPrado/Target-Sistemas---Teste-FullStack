import { Component } from '@angular/core';
import { Lancamento } from 'src/app/models/lancamento.model';
import { LancamentoService } from 'src/app/services/lancamento-services.service';

@Component({
  selector: 'app-lancamento-inserir',
  templateUrl: './lancamento-inserir.component.html',
  styleUrls: ['./lancamento-inserir.component.css']
})
export class LancamentoInserirComponent {
  novoLancamento: Lancamento = {
    descricao: '',
    data: '',
    valor: 0,
    status: true,
    avulso: false,
    id: 0,
 
  };

  constructor(private lancamentoService: LancamentoService) {}

  inserirLancamento(): void {
    this.lancamentoService.inserirLancamento(this.novoLancamento).subscribe(
      (response) => {
        // Lidar com a resposta bem-sucedida
        console.log('Lançamento inserido com sucesso:', response);
      },
      (error) => {
        // Lidar com erros
        console.error('Erro ao inserir lançamento:', error);
      }
    );
    
  }

  refreshPage(): void {
    window.location.reload();
  }

  
}

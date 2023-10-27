import { Component, OnInit } from '@angular/core';
import { LancamentoService } from 'src/app/services/lancamento-services.service';
import { Lancamento } from 'src/app/models/lancamento.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lancamentos-list',
  templateUrl: './lancamento-list.component.html',
  styleUrls: ['./lancamento-list.component.css']
})
export class LancamentosListComponent implements OnInit {
  lancamentos: Lancamento[] = [];

  constructor(private lancamentoService: LancamentoService, private router: Router) {}

  ngOnInit(): void {
    this.carregarLancamentos();
  }

  carregarLancamentos() {
    this.lancamentoService.getLancamentos().subscribe(
      (lancamentos) => {
        this.lancamentos = lancamentos;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  excluirLancamento(id: number) {
    this.lancamentoService.excluirLancamento(id).subscribe(
        () => {
            // Recarrega a página atual após a exclusão bem-sucedida
            window.location.reload();
            alert('Lançamento deletado com sucesso');
        },
        (error) => {
            console.error('Erro ao excluir o lançamento:', error);
        }
    );
}

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Lancamento } from 'src/app/models/lancamento.model';
import { LancamentoService } from 'src/app/services/lancamento-services.service';

@Component({
  selector: 'app-lancamento-editar',
  templateUrl: './lancamento-editar.component.html',
  styleUrls: ['./lancamento-editar.component.css']
})
export class LancamentoEditarComponent implements OnInit {
  lancamento: Lancamento = new Lancamento(); 

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private lancamentoService: LancamentoService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const id = +params['id'];

      if (!isNaN(id)) {
        this.lancamentoService.getLancamentoPorId(id).subscribe((lancamento) => {
          this.lancamento = lancamento;
        });
      } else {
        console.error("ID inválido");
      }
    });
  }

  editarLancamento() {
    this.lancamentoService.atualizarLancamento(this.lancamento.id, this.lancamento).subscribe(
      (lancamentoEditado) => {
        
        location.reload();
      },
      (error) => {
        console.error(error); 
      }
    );
  }
}

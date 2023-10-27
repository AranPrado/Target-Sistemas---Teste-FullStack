import { Component, OnInit } from '@angular/core';
import { LancamentoService } from 'src/app/services/lancamento-services.service';

@Component({
  selector: 'app-lancamento-total',
  templateUrl: './lancamento-total.component.html',
  styleUrls: ['./lancamento-total.component.css']
})
export class LancamentoTotalComponent implements OnInit {
  totalLancamentos: number = 0;

  constructor(private lancamentoService: LancamentoService) {}

  ngOnInit() {
    this.lancamentoService.calcularTotalLancamentos().subscribe(
      (total) => {
        this.totalLancamentos = total;
      },
      (error) => {
        console.error(error);
      }
    );
  }
}

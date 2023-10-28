import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Lancamento } from '../models/lancamento.model';

@Injectable({
  providedIn: 'root'
})
export class LancamentoService {
  private apiUrl = 'http://localhost:5153'; // Substitua pela URL da sua API

  constructor(private http: HttpClient) { }

  // Método para buscar um lançamento por ID
  getLancamentoPorId(id: number): Observable<Lancamento> {
    return this.http.get<Lancamento>(`${this.apiUrl}/api/lancamento/buscarLancamentoPorID/${id}`);
  }


  getLancamentos(): Observable<Lancamento[]> {
    return this.http.get<Lancamento[]>(`${this.apiUrl}/api/lancamento/listarTodosLancamentos`);
  }

  // Método para inserir um novo lançamento
  inserirLancamento(lancamento: Lancamento): Observable<Lancamento> {
    return this.http.post<Lancamento>(`${this.apiUrl}/api/Lancamento/InserirLancamento`, lancamento);
  }

  // Método para atualizar um lançamento
  atualizarLancamento(id: number, lancamento: Lancamento): Observable<Lancamento> {
    return this.http.put<Lancamento>(`${this.apiUrl}/api/lancamento/AtualizarLancamento/${id}`, lancamento);
  }

  // Método para excluir um lançamento
  excluirLancamento(id: number): Observable<boolean> {
    return this.http.delete<boolean>(`${this.apiUrl}/api/lancamento/DeletarLancamento/${id}`);
  }

  calcularTotalLancamentos(): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}/api/lancamento/TotalLancamentos`);
  }
}

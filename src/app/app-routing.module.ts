import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LancamentoInserirComponent } from './components/lancamento-inserir/lancamento-inserir.component';
import { LancamentosListComponent } from './components/lancamento-list/lancamento-list.component';
import { LancamentoEditarComponent } from './components/lancamento-editar/lancamento-editar.component';
import { LancamentoTotalComponent } from './components/lancamento-total/lancamento-total.component';

const routes: Routes = [
  { path: 'lancamento/inserir', component: LancamentoInserirComponent },
  { path: 'lancamento/editar/:id', component: LancamentoEditarComponent },
  { path: '', redirectTo: '/lancamento', pathMatch: 'full' },
  { path: 'lancamento/total', component: LancamentoTotalComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

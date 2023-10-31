import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { PlanoAntecipadoComponent } from './components/main/plano-antecipado/plano-antecipado.component';
import { PlanoEconomicoComponent } from './components/main/plano-economico/plano-economico.component';
import { TabelaEconomicoComponent } from './components/main/plano-economico/tabela-economico/tabela-economico.component';

const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: 'tabela-economico', component: TabelaEconomicoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

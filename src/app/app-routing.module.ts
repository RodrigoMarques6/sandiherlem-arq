import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { PlanoAntecipadoComponent } from './components/main/plano-antecipado/plano-antecipado.component';
import { PlanoEconomicoComponent } from './components/main/plano-economico/plano-economico.component';

const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  {
    path: 'main',
    component: MainComponent,
    children: [
      { path: '', redirectTo: '', pathMatch: 'full' },
      { path: 'plano-antecipado', component: PlanoAntecipadoComponent },
      { path: 'plano-economico', component: PlanoEconomicoComponent },
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

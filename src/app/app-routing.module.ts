import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { EconomicTableComponent } from './components/main/economic-table/economic-table.component';
import { AdvanceTableComponent } from './components/main/advance-table/advance-table.component';



const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', component: MainComponent },
  { path: 'tabela-plano-economico', component: EconomicTableComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

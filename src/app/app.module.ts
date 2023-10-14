import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PlanoAntecipadoComponent } from './components/main/planos/plano-antecipado/plano-antecipado.component';
import { PlanoEconomicoComponent } from './components/main/planos/plano-economico/plano-economico.component';
import { TabelaEconomicoComponent } from './components/main/tabelas/tabela-economico/tabela-economico.component';
import { TabelaAntecipadoComponent } from './components/main/tabelas/tabela-antecipado/tabela-antecipado.component';



@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    TabelaEconomicoComponent,
    TabelaAntecipadoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MenuComponent,
    PlanoAntecipadoComponent,
    PlanoEconomicoComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

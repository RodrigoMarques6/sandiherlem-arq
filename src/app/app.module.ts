import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainComponent } from './components/main/main.component';
import { PlanoAntecipadoComponent } from './components/main/plano-antecipado/plano-antecipado.component';
import { PlanoEconomicoComponent } from './components/main/plano-economico/plano-economico.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TabelaEconomicoComponent } from './components/main/plano-economico/tabela-economico/tabela-economico.component';
import { TabelaAntecipadoComponent } from './components/main/tabela-antecipado/tabela-antecipado.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    MainComponent,
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
  bootstrap: [AppComponent],
})
export class AppModule {}

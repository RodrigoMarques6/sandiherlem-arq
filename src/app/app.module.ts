import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainComponent } from './components/main/main.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EconomicTableComponent } from './components/main/economic-table/economic-table.component';
import { AdvanceTableComponent } from './components/main/advance-table/advance-table.component';

@NgModule({
  declarations: [AppComponent, FooterComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MenuComponent,
    MainComponent,
    EconomicTableComponent,
    AdvanceTableComponent
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

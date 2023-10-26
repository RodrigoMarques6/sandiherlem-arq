import { Component, OnInit } from '@angular/core';
import { BrasileiraoService } from 'src/app/services/brasileirao.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  tabela: any = [];

  displayedColumns = ['posicao', 'escudo', 'time', 'pontos'];

  constructor(private brasileiraoService: BrasileiraoService) {}
  ngOnInit(): void {
    this.tabela = this.brasileiraoService.getTabela();
  }
}

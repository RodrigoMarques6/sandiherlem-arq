import { Component, Input, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/services/shared.service';

export interface PeriodicElement {
  modalidade: string;
  taxa: string;
  desconto: number;
  receba_total: number;
  receba_mes: number;
  cliente_paga_mes: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    modalidade: 'Débito',
    taxa: '5%',
    desconto: 1.0079,
    receba_total: 1000,
    receba_mes: 1000,
    cliente_paga_mes: 1000,
  },
  {
    modalidade: 'Crédito (1x)',
    taxa: '5%',
    desconto: 4.0026,
    receba_total: 1000,
    receba_mes: 1000,
    cliente_paga_mes: 1000,
  },
  {
    modalidade: 'Crédito (2x)',
    taxa: '5%',
    desconto: 6.941,
    receba_total: 1000,
    receba_mes: 1000,
    cliente_paga_mes: 1000,
  },
  {
    modalidade: 'Crédito (3x)',
    taxa: '5%',
    desconto: 9.0122,
    receba_total: 1000,
    receba_mes: 1000,
    cliente_paga_mes: 1000,
  },
  {
    modalidade: 'Crédito (4x)',
    taxa: '5%',
    desconto: 10.811,
    receba_total: 1000,
    receba_mes: 1000,
    cliente_paga_mes: 1000,
  },
  {
    modalidade: 'Crédito (5x)',
    taxa: '5%',
    desconto: 12.0107,
    receba_total: 1000,
    receba_mes: 1000,
    cliente_paga_mes: 1000,
  },
  {
    modalidade: 'Crédito (6x)',
    taxa: '5%',
    desconto: 14.0067,
    receba_total: 1000,
    receba_mes: 1000,
    cliente_paga_mes: 1000,
  },
  {
    modalidade: 'Crédito (7x)',
    taxa: '5%',
    desconto: 15.9994,
    receba_total: 1000,
    receba_mes: 1000,
    cliente_paga_mes: 1000,
  },
  {
    modalidade: 'Crédito (8x)',
    taxa: '5%',
    desconto: 18.9984,
    receba_total: 1200,
    receba_mes: 1300,
    cliente_paga_mes: 1400,
  },
  {
    modalidade: 'Crédito (9x)',
    taxa: 'Neon',
    desconto: 20.1797,
    receba_total: 1000,
    receba_mes: 1000,
    cliente_paga_mes: 1000,
  },
  {
    modalidade: 'Crédito (10x)',
    taxa: 'Neon',
    desconto: 20.1797,
    receba_total: 1000,
    receba_mes: 1000,
    cliente_paga_mes: 1000,
  },
  {
    modalidade: 'Crédito (11x)',
    taxa: 'Neon',
    desconto: 20.1797,
    receba_total: 1000,
    receba_mes: 1000,
    cliente_paga_mes: 1000,
  },
  {
    modalidade: 'Crédito (12x)',
    taxa: 'Neon',
    desconto: 32289,
    receba_total: 1000,
    receba_mes: 1000,
    cliente_paga_mes: 1000,
  },
];

@Component({
  selector: 'app-economic-table',
  templateUrl: './economic-table.component.html',
  styleUrls: ['./economic-table.component.css'],
  standalone: true,
  imports: [MatTableModule],
})
export class EconomicTableComponent implements OnInit {
  displayedColumns: string[] = [
    'modalidade',
    'taxa',
    'desconto',
    'receba_total',
    'receba_mes',
    'cliente_paga_mes',
  ];
  dataSource = ELEMENT_DATA;

  descriptionTable: string = `Valores válidos para um projeto de R$ `;
  valueInput1!: number;

  ngOnInit(): void {
    this.valueInput1 = this.sharedData.getNumber();
    console.log(this.valueInput1 * (5/100))
  }

  constructor(private router: Router, private sharedData: SharedService) {}
  goToStart() {
    this.router.navigate(['/inicio']);
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/services/shared.service';

export interface PeriodicElement {
  taxa: string;
  modalidade: string;
  desconto: number;
  receba_total: number;
  receba_mes: number;
  cliente_paga_mes: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    modalidade: 'Débito',
    taxa: 'Hydrogen',
    desconto: 1.0079,
    receba_total: 1000,
    receba_mes: 1000,
    cliente_paga_mes: 1000,
  },
  {
    modalidade: '1x',
    taxa: 'Helium',
    desconto: 4.0026,
    receba_total: 1000,
    receba_mes: 1000,
    cliente_paga_mes: 1000,
  },
  {
    modalidade: '2x',
    taxa: 'Lithium',
    desconto: 6.941,
    receba_total: 1000,
    receba_mes: 1000,
    cliente_paga_mes: 1000,
  },
  {
    modalidade: '3x',
    taxa: 'Beryllium',
    desconto: 9.0122,
    receba_total: 1000,
    receba_mes: 1000,
    cliente_paga_mes: 1000,
  },
  {
    modalidade: '4x',
    taxa: 'Boron',
    desconto: 10.811,
    receba_total: 1000,
    receba_mes: 1000,
    cliente_paga_mes: 1000,
  },
  {
    modalidade: '5x',
    taxa: 'Carbon',
    desconto: 12.0107,
    receba_total: 1000,
    receba_mes: 1000,
    cliente_paga_mes: 1000,
  },
  {
    modalidade: '6x',
    taxa: 'Nitrogen',
    desconto: 14.0067,
    receba_total: 1000,
    receba_mes: 1000,
    cliente_paga_mes: 1000,
  },
  {
    modalidade: '7x',
    taxa: 'Oxygen',
    desconto: 15.9994,
    receba_total: 1000,
    receba_mes: 1000,
    cliente_paga_mes: 1000,
  },
  {
    modalidade: '8x',
    taxa: 'Fluorine',
    desconto: 18.9984,
    receba_total: 1000,
    receba_mes: 1000,
    cliente_paga_mes: 1000,
  },
  {
    modalidade: '9x',
    taxa: 'Neon',
    desconto: 20.1797,
    receba_total: 1000,
    receba_mes: 1000,
    cliente_paga_mes: 1000,
  },
  {
    modalidade: '10x',
    taxa: 'Neon',
    desconto: 20.1797,
    receba_total: 1000,
    receba_mes: 1000,
    cliente_paga_mes: 1000,
  },
  {
    modalidade: '11x',
    taxa: 'Neon',
    desconto: 20.1797,
    receba_total: 1000,
    receba_mes: 1000,
    cliente_paga_mes: 1000,
  },
  {
    modalidade: '12x',
    taxa: 'Neon',
    desconto: 20.1797,
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
  }

  constructor(private router: Router, private sharedData: SharedService) {}
  goToStart() {
    this.router.navigate(['/inicio']);
  }
}

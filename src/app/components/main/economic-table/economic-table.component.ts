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
    taxa: '1,9%',
    desconto: 0,
    receba_total: 0,
    receba_mes: 0,
    cliente_paga_mes: 0,
  },
  {
    modalidade: 'Crédito (1x)',
    taxa: '4%',
    desconto: 0,
    receba_total: 0,
    receba_mes: 0,
    cliente_paga_mes: 0,
  },
  {
    modalidade: 'Crédito (2x)',
    taxa: '5%',
    desconto: 0,
    receba_total: 0,
    receba_mes: 0,
    cliente_paga_mes: 0,
  },
  {
    modalidade: 'Crédito (3x)',
    taxa: '5%',
    desconto: 0,
    receba_total: 0,
    receba_mes: 0,
    cliente_paga_mes: 0,
  },
  {
    modalidade: 'Crédito (4x)',
    taxa: '5%',
    desconto: 0,
    receba_total: 0,
    receba_mes: 0,
    cliente_paga_mes: 0,
  },
  {
    modalidade: 'Crédito (5x)',
    taxa: '5%',
    desconto: 0,
    receba_total: 0,
    receba_mes: 0,
    cliente_paga_mes: 0,
  },
  {
    modalidade: 'Crédito (6x)',
    taxa: '5%',
    desconto: 0,
    receba_total: 0,
    receba_mes: 0,
    cliente_paga_mes: 0,
  },
  {
    modalidade: 'Crédito (7x)',
    taxa: '5%',
    desconto: 0,
    receba_total: 0,
    receba_mes: 0,
    cliente_paga_mes: 0,
  },
  {
    modalidade: 'Crédito (8x)',
    taxa: '5%',
    desconto: 0,
    receba_total: 0,
    receba_mes: 0,
    cliente_paga_mes: 0,
  },
  {
    modalidade: 'Crédito (9x)',
    taxa: '5%',
    desconto: 0,
    receba_total: 0,
    receba_mes: 0,
    cliente_paga_mes: 0,
  },
  {
    modalidade: 'Crédito (10x)',
    taxa: '5%',
    desconto: 0,
    receba_total: 0,
    receba_mes: 0,
    cliente_paga_mes: 0,
  },
  {
    modalidade: 'Crédito (11x)',
    taxa: '5%',
    desconto: 0,
    receba_total: 0,
    receba_mes: 0,
    cliente_paga_mes: 0,
  },
  {
    modalidade: 'Crédito (12x)',
    taxa: '5%',
    desconto: 0,
    receba_total: 0,
    receba_mes: 0,
    cliente_paga_mes: 0,
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

  constructor(private router: Router, private sharedData: SharedService) {}

  ngOnInit(): void {
    this.valueInput1 = this.sharedData.getNumber();
    this.updateDiscounts();
    this.updateReceiveTotal();
    this.updateReceiveMonth();
    this.updateCustomerPaysMonth();
  }

  updateDiscounts(): void {
    this.dataSource = this.dataSource.map((item) => {
      const taxaPercent = parseFloat(
        item.taxa.replace('%', '').replace(',', '.')
      );
      const discount = (this.valueInput1 * (taxaPercent / 100)).toFixed(2);
      return {
        ...item,
        desconto: parseFloat(discount),
      };
    });
  }

  updateReceiveTotal(): void {
    this.dataSource = this.dataSource.map((item) => {
      const receiveTotal = parseFloat(item.receba_total.toString());
      const total = (this.valueInput1 - item.desconto).toFixed(2);
      return {
        ...item,
        receba_total: parseFloat(total),
      };
    });
  }

  updateReceiveMonth(): void {
    this.dataSource = this.dataSource.map((item) => {
      let totalMonth;

      switch (item.modalidade) {
        case 'Débito':
        case 'Crédito (1x)':
          totalMonth = item.receba_total;
          break;
        case 'Crédito (2x)':
          totalMonth = item.receba_total / 2;
          break;
        case 'Crédito (3x)':
          totalMonth = item.receba_total / 3;
          break;
        case 'Crédito (4x)':
          totalMonth = item.receba_total / 4;
          break;
        case 'Crédito (5x)':
          totalMonth = item.receba_total / 5;
          break;
        case 'Crédito (6x)':
          totalMonth = item.receba_total / 6;
          break;
        case 'Crédito (7x)':
          totalMonth = item.receba_total / 7;
          break;
        case 'Crédito (8x)':
          totalMonth = item.receba_total / 8;
          break;
        case 'Crédito (9x)':
          totalMonth = item.receba_total / 9;
          break;
        case 'Crédito (10x)':
          totalMonth = item.receba_total / 10;
          break;
        case 'Crédito (11x)':
          totalMonth = item.receba_total / 11;
          break;
        case 'Crédito (12x)':
          totalMonth = item.receba_total / 12;
          break;
        default:
          totalMonth = 0;
          break;
      }

      return {
        ...item,
        receba_mes: parseFloat(totalMonth.toFixed(2)),
      };
    });
  }

  updateCustomerPaysMonth(): void {
    this.dataSource = this.dataSource.map((item) => {
      let totalMonth;

      switch (item.modalidade) {
        case 'Débito':
        case 'Crédito (1x)':
          totalMonth = this.valueInput1;
          break;
        case 'Crédito (2x)':
          totalMonth = this.valueInput1 / 2;
          break;
        case 'Crédito (3x)':
          totalMonth = this.valueInput1 / 3;
          break;
        case 'Crédito (4x)':
          totalMonth = this.valueInput1 / 4;
          break;
        case 'Crédito (5x)':
          totalMonth = this.valueInput1 / 5;
          break;
        case 'Crédito (6x)':
          totalMonth = this.valueInput1 / 6;
          break;
        case 'Crédito (7x)':
          totalMonth = this.valueInput1 / 7;
          break;
        case 'Crédito (8x)':
          totalMonth = this.valueInput1 / 8;
          break;
        case 'Crédito (9x)':
          totalMonth = this.valueInput1 / 9;
          break;
        case 'Crédito (10x)':
          totalMonth = this.valueInput1 / 10;
          break;
        case 'Crédito (11x)':
          totalMonth = this.valueInput1 / 11;
          break;
        case 'Crédito (12x)':
          totalMonth = this.valueInput1 / 12;
          break;
        default:
          totalMonth = 0;
          break;
      }

      return {
        ...item,
        cliente_paga_mes: parseFloat(totalMonth.toFixed(2)),
      };
    });
  }

  goToStart() {
    this.router.navigate(['/inicio']);
  }
}

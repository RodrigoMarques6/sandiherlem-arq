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
    cliente_paga_mes: 1000,
  },
  {
    modalidade: 'Crédito (1x)',
    taxa: '4%',
    desconto: 0,
    receba_total: 0,
    receba_mes: 0,
    cliente_paga_mes: 1000,
  },
  {
    modalidade: 'Crédito (2x)',
    taxa: '5%',
    desconto: 0,
    receba_total: 0,
    receba_mes: 0,
    cliente_paga_mes: 1000,
  },
  {
    modalidade: 'Crédito (3x)',
    taxa: '5%',
    desconto: 0,
    receba_total: 0,
    receba_mes: 0,
    cliente_paga_mes: 1000,
  },
  {
    modalidade: 'Crédito (4x)',
    taxa: '5%',
    desconto: 0,
    receba_total: 0,
    receba_mes: 0,
    cliente_paga_mes: 1000,
  },
  {
    modalidade: 'Crédito (5x)',
    taxa: '5%',
    desconto: 0,
    receba_total: 0,
    receba_mes: 0,
    cliente_paga_mes: 1000,
  },
  {
    modalidade: 'Crédito (6x)',
    taxa: '5%',
    desconto: 0,
    receba_total: 0,
    receba_mes: 0,
    cliente_paga_mes: 1000,
  },
  {
    modalidade: 'Crédito (7x)',
    taxa: '5%',
    desconto: 0,
    receba_total: 0,
    receba_mes: 0,
    cliente_paga_mes: 1000,
  },
  {
    modalidade: 'Crédito (8x)',
    taxa: '5%',
    desconto: 0,
    receba_total: 0,
    receba_mes: 1300,
    cliente_paga_mes: 1400,
  },
  {
    modalidade: 'Crédito (9x)',
    taxa: '5%',
    desconto: 0,
    receba_total: 0,
    receba_mes: 0,
    cliente_paga_mes: 1000,
  },
  {
    modalidade: 'Crédito (10x)',
    taxa: '5%',
    desconto: 0,
    receba_total: 0,
    receba_mes: 0,
    cliente_paga_mes: 1000,
  },
  {
    modalidade: 'Crédito (11x)',
    taxa: '5%',
    desconto: 0,
    receba_total: 0,
    receba_mes: 0,
    cliente_paga_mes: 1000,
  },
  {
    modalidade: 'Crédito (12x)',
    taxa: '5%',
    desconto: 0,
    receba_total: 0,
    receba_mes: 0,
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

  constructor(private router: Router, private sharedData: SharedService) {}

  ngOnInit(): void {
    this.valueInput1 = this.sharedData.getNumber();
    this.updateDiscounts();
    this.updateReceiveTotal();
    this.updateReceiveMonth();
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

  updateReceiveMonth() {
    // Função precisa ser ajustada. No momento, está calculando idêntico ao ReceiveTotal(). 
    this.dataSource = this.dataSource.map((item) => {
      const receiveMonth = parseFloat(item.receba_mes.toString());
      const totalMonth = (this.valueInput1 - item.desconto).toFixed(2);
      return {
        ...item,
        receba_mes: parseFloat(totalMonth),
      };
    });
  }

  updateCustomerPaysMonth() {}

  goToStart() {
    this.router.navigate(['/inicio']);
  }
}

import { Component, NgModule, OnInit } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SharedService } from 'src/app/services/shared.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  standalone: true,
  imports: [MatExpansionModule, MatInputModule, CommonModule, FormsModule],
})
export class MainComponent implements OnInit {
  buttonClass = '';
  valueInputEconomic!: number;

  constructor(private router: Router, private sharedService: SharedService) {}
  ngOnInit(): void {}

  planDescription: string = 'Neste plano, você recebe a cada mês de vencimento da parcela do cliente.';

  panelOpenState = false;

  navigateForEconomicTable() {
    setTimeout(() => {
      this.router.navigate(['/tabela-plano-economico']),
        this.sharedService.setNumber(this.valueInputEconomic);
    }, 2500);
  }

  onButtonClick() {
    this.buttonClass = 'onclic';
    setTimeout(() => this.validate(), 450);
  }

  validate() {
    setTimeout(() => {
      this.buttonClass = '';
      this.buttonClass = 'validate';
      setTimeout(() => this.callback(), 450);
    }, 1000);
  }

  callback() {
    setTimeout(() => {
      this.buttonClass = '';
    }, 1250);
  }
 }

import { Component, NgModule, OnInit } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  standalone: true,
  imports: [MatExpansionModule, MatInputModule, CommonModule],
})
export class MainComponent implements OnInit {
  buttonClass = '';

  constructor(private router: Router) {}
  ngOnInit(): void {}

  planDescription: string = 'Neste plano, você recebe no próximo dia útil';

  panelOpenState = false;

  navigateForEconomicTable() {
    setTimeout(() => {
      this.router.navigate(['/tabela-plano-economico']);
    }, 2500)
    
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

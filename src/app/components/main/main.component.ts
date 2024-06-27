import { Component, OnInit } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  standalone: true,
  imports: [MatExpansionModule, MatInputModule],
})
export class MainComponent implements OnInit {
  constructor(private router: Router) {}
  ngOnInit(): void {}

  planDescription: string = 'Neste plano, você recebe no próximo dia útil';

  panelOpenState = false;

  teste() {
    this.router.navigate(['/tabela-economico'])
  }
}

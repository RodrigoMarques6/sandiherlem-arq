import { Component, OnInit } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';

@Component({
  selector: 'app-plano-economico',
  templateUrl: './plano-economico.component.html',
  styleUrls: ['./plano-economico.component.css'],
  standalone: true,
  imports: [MatExpansionModule, MatInputModule],
})
export class PlanoEconomicoComponent implements OnInit {
  constructor(private router: Router) {}
  ngOnInit(): void {}

  planDescription: string = 'Neste plano, você recebe mensalmente';

  panelOpenState = false;

  teste() {
    this.router.navigate(['/tabela-economico'])
  }


}

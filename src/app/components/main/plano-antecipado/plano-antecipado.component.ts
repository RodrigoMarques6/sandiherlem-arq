import { Component, OnInit } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-plano-antecipado',
  templateUrl: './plano-antecipado.component.html',
  styleUrls: ['./plano-antecipado.component.css'],
  standalone: true,
  imports: [MatExpansionModule, MatInputModule],
})
export class PlanoAntecipadoComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}

  planDescription: string = 'Neste plano, você recebe no próximo dia útil';

  panelOpenState = false;
}

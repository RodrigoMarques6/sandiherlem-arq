import { Component } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-plano-economico',
  templateUrl: './plano-economico.component.html',
  styleUrls: ['./plano-economico.component.css'],
  standalone: true,
  imports: [MatExpansionModule, MatInputModule],
})
export class PlanoEconomicoComponent {

  planDescription: string = 'Neste plano, você recebe mensalmente';

  panelOpenState = false;
}

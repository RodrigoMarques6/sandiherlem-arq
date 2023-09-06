import { Component } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-plano-antecipado',
  templateUrl: './plano-antecipado.component.html',
  standalone: true,
  imports: [MatExpansionModule, MatInputModule],
})
export class PlanoAntecipadoComponent {
  panelOpenState = false;
}

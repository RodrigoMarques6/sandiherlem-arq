import { Component } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-plano-economico',
  templateUrl: './plano-economico.component.html',
  standalone: true,
  imports: [MatExpansionModule, MatInputModule],
})
export class PlanoEconomicoComponent {
  panelOpenState = false;
}

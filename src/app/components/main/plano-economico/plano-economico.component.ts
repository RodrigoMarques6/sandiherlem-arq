import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-plano-economico',
  templateUrl: './plano-economico.component.html',
  styleUrls: ['./plano-economico.component.css'],
  standalone: true,
  
})
export class PlanoEconomicoComponent implements OnInit {
  constructor(private router: Router) {}
  ngOnInit(): void {}


}

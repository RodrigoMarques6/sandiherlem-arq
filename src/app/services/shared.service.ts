import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  number!: number;
  taxa1!: number;
  taxa2!: number;

  constructor() {}

  setNumber(params: number): void {
    this.number = params;
  }

  getNumber(): number {
    return this.number;
  }
}

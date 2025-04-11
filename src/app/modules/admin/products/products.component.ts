import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [],
  templateUrl: './products.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
})
export class ProductsComponent { }

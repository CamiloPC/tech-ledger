import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';

export interface PeriodicElement {
    name: string;
    client: string;
    date: string;
    amount: number;
    status: string;
  }

const ELEMENT_DATA: PeriodicElement[] = [
    {
        name: "Factura 1",
        client: 'Contacto 1',
        date: '2019-10-07T22:22:37.274Z',
        amount: 1234,
        status: 'Pendiente',
    },
    {
        name: "Factura 2",
        client: 'Contacto 2',
        date: '2019-12-18T14:51:24.461Z',
        amount: 1234,
        status: 'Pagado',
    },
];

@Component({
  selector: 'app-sale-invoices',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatTableModule
  ],
  templateUrl: './sale-invoices.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
})
export class SaleInvoicesComponent {

    displayedColumns: string[] = ['name', 'client', 'date', 'amount', 'status'];
    dataSource = ELEMENT_DATA;

    openIvoiceDialog() {}
}

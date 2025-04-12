import { TextFieldModule } from '@angular/cdk/text-field';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatOptionModule } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';

export interface PeriodicElement {
    name: string;
    address: string;
    phone: string;
    email: string;
  }

const ELEMENT_DATA: PeriodicElement[] = [
    {
        name: "Nombre 1",
        address: '123',
        phone: '3g4g3g4g',
        email: 'nombre1@mail',
    },
    {
        name: "Nombre 2",
        address: '456',
        phone: '21312435',
        email: 'nombre2@mail',
    },
];

@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [
    MatIconModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatTableModule
  ],
  templateUrl: './contacts.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
})
export class ContactsComponent {

    displayedColumns: string[] = ['name', 'address', 'phone', 'email'];
    dataSource = ELEMENT_DATA;

    /**
    * Constructor
    */
        constructor(
            private _matDialog: MatDialog,
        ) {}

    /**
     * Open contacts dialog
     */
    openContactDialog(): void {
        // Open the dialog
        // const dialogRef = this._matDialog.open(ContactDialogComponent);

        // dialogRef.afterClosed().subscribe((result) => {
        //     console.log('Contact dialog was closed!');
        // });
    }
}

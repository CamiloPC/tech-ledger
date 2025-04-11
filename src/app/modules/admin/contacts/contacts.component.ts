import { Component } from '@angular/core';

@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [],
  templateUrl: './contacts.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
})
export class ContactsComponent { }

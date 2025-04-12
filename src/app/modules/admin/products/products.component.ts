import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSort, MatSortHeader } from '@angular/material/sort';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    MatInputModule,
    MatSort,
    MatSortHeader,
  ],
  templateUrl: './products.component.html',
  styles: [
        /* language=SCSS */
        `
            .inventory-grid {
                grid-template-columns: 88px auto 40px;

                @screen sm {
                    grid-template-columns: 88px auto 112px 72px;
                }

                @screen md {
                    grid-template-columns: 88px 112px auto 112px 72px;
                }

                @screen lg {
                    grid-template-columns: 88px 222px auto 112px 96px 96px 72px;
                }
            }
        `,
    ],
})
export class ProductsComponent {

    createProduct() {};
}

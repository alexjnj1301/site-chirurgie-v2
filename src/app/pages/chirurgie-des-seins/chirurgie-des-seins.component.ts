import { Component, ViewEncapsulation } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-chirurgie-des-seins',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './chirurgie-des-seins.component.html',
  encapsulation: ViewEncapsulation.None
})
export class ChirurgieDesSeinsComponent {}
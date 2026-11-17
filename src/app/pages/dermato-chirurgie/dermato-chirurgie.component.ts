import { Component, ViewEncapsulation } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dermato-chirurgie',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './dermato-chirurgie.component.html',
  encapsulation: ViewEncapsulation.None
})
export class DermatoChirurgieComponent {}
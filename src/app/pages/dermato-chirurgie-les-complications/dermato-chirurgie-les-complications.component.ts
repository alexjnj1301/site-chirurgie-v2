import { Component, ViewEncapsulation } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dermato-chirurgie-les-complications',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './dermato-chirurgie-les-complications.component.html',
  encapsulation: ViewEncapsulation.None
})
export class DermatoChirurgieLesComplicationsComponent {}
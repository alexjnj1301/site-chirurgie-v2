import { Component, ViewEncapsulation } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-blepharoplastie-les-complications',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './blepharoplastie-les-complications.component.html',
  encapsulation: ViewEncapsulation.None
})
export class BlepharoplastieLesComplicationsComponent {}
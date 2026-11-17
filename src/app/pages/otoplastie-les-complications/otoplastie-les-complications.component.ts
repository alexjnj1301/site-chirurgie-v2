import { Component, ViewEncapsulation } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-otoplastie-les-complications',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './otoplastie-les-complications.component.html',
  encapsulation: ViewEncapsulation.None
})
export class OtoplastieLesComplicationsComponent {}
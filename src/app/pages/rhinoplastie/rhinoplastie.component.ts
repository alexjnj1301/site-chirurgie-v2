import { Component, ViewEncapsulation } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-rhinoplastie',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './rhinoplastie.component.html',
  encapsulation: ViewEncapsulation.None
})
export class RhinoplastieComponent {}
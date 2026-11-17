import { Component, ViewEncapsulation } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-blepharoplastie',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './blepharoplastie.component.html',
  encapsulation: ViewEncapsulation.None
})
export class BlepharoplastieComponent {}
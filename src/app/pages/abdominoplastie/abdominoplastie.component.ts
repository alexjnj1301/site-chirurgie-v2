import { Component, ViewEncapsulation } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-abdominoplastie',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './abdominoplastie.component.html',
  encapsulation: ViewEncapsulation.None
})
export class AbdominoplastieComponent {}
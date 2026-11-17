import { Component, ViewEncapsulation } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tarifs',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './tarifs.component.html',
  encapsulation: ViewEncapsulation.None
})
export class TarifsComponent {}
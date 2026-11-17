import { Component, ViewEncapsulation } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-actualites',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './actualites.component.html',
  encapsulation: ViewEncapsulation.None
})
export class ActualitesComponent {}
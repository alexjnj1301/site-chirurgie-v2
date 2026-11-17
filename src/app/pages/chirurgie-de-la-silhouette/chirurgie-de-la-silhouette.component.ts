import { Component, ViewEncapsulation } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-chirurgie-de-la-silhouette',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './chirurgie-de-la-silhouette.component.html',
  encapsulation: ViewEncapsulation.None
})
export class ChirurgieDeLaSilhouetteComponent {}
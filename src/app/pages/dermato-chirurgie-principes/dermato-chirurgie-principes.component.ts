import { Component, ViewEncapsulation } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dermato-chirurgie-principes',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './dermato-chirurgie-principes.component.html',
  encapsulation: ViewEncapsulation.None
})
export class DermatoChirurgiePrincipesComponent {}
import { Component, ViewEncapsulation } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-prendre-rendez-vous',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './prendre-rendez-vous.component.html',
  encapsulation: ViewEncapsulation.None
})
export class PrendreRendezVousComponent {}
import { Component, ViewEncapsulation } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-medecine-esthetique',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './medecine-esthetique.component.html',
  encapsulation: ViewEncapsulation.None
})
export class MedecineEsthetiqueComponent {}
import { Component, ViewEncapsulation } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-ptose-mammaire',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './ptose-mammaire.component.html',
  encapsulation: ViewEncapsulation.None
})
export class PtoseMammaireComponent {}
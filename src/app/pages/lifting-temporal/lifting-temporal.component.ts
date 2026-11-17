import { Component, ViewEncapsulation } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-lifting-temporal',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './lifting-temporal.component.html',
  encapsulation: ViewEncapsulation.None
})
export class LiftingTemporalComponent {}
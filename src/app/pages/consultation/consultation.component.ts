import { Component, ViewEncapsulation } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-consultation',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './consultation.component.html',
  encapsulation: ViewEncapsulation.None
})
export class ConsultationComponent {}
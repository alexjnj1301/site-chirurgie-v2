import { Component, ViewEncapsulation } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hospitalisation',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './hospitalisation.component.html',
  encapsulation: ViewEncapsulation.None
})
export class HospitalisationComponent {}
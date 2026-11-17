import { Component, ViewEncapsulation } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-photos-dinterventions',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './photos-dinterventions.component.html',
  encapsulation: ViewEncapsulation.None
})
export class PhotosDinterventionsComponent {}
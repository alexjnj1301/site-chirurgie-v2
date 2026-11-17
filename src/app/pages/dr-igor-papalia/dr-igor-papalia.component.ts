import { Component, ViewEncapsulation } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dr-igor-papalia',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './dr-igor-papalia.component.html',
  styleUrl: './dr-igor-papalia.component.css',
  encapsulation: ViewEncapsulation.None
})
export class DrIgorPapaliaComponent {}

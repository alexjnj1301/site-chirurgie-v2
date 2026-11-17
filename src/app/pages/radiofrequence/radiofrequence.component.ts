import { Component, ViewEncapsulation } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-radiofrequence',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './radiofrequence.component.html',
  encapsulation: ViewEncapsulation.None
})
export class RadiofrequenceComponent {}
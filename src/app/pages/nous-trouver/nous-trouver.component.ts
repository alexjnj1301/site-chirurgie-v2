import { Component, ViewEncapsulation } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nous-trouver',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './nous-trouver.component.html',
  encapsulation: ViewEncapsulation.None
})
export class NousTrouverComponent {}
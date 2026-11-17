import { Component, ViewEncapsulation } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-eliminer-poches-sous-les-yeux',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './eliminer-poches-sous-les-yeux.component.html',
  encapsulation: ViewEncapsulation.None
})
export class EliminerPochesSousLesYeuxComponent {}
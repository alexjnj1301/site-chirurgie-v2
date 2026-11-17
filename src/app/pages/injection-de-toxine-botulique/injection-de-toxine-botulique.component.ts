import { Component, ViewEncapsulation } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-injection-de-toxine-botulique',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './injection-de-toxine-botulique.component.html',
  encapsulation: ViewEncapsulation.None
})
export class InjectionDeToxineBotuliqueComponent {}
import { Component, ViewEncapsulation } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-injection-toxine-botulique',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './injection-toxine-botulique.component.html',
  encapsulation: ViewEncapsulation.None
})
export class InjectionToxineBotuliqueComponent {}
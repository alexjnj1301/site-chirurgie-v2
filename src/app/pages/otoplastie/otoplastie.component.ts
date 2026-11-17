import { Component, ViewEncapsulation } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-otoplastie',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './otoplastie.component.html',
  encapsulation: ViewEncapsulation.None
})
export class OtoplastieComponent {}
import { Component, ViewEncapsulation } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-photos-otoplastie',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './photos-otoplastie.component.html',
  encapsulation: ViewEncapsulation.None
})
export class PhotosOtoplastieComponent {}
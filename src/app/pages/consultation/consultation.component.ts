import { Component, signal, ViewEncapsulation } from '@angular/core';
import { RouterLink } from '@angular/router';

export type ParcoursType = 'general' | 'mammaire' | 'liposuccion';

@Component({
  selector: 'app-consultation',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './consultation.component.html',
  styleUrl: './consultation.component.css',
  encapsulation: ViewEncapsulation.None
})
export class ConsultationComponent {
  selectedTab = signal<ParcoursType>('general');

  setTab(tab: ParcoursType) {
    this.selectedTab.set(tab);
  }
}

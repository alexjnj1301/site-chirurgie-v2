import { Component, inject, ViewEncapsulation } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslationService, SupportedLanguage } from '../../core/i18n/translation.service';
import { TranslatePipe } from '../../core/i18n/translate.pipe';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, TranslatePipe],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent {
  private readonly translationService = inject(TranslationService);

  readonly currentLang = this.translationService.currentLang;

  switchLang(lang: SupportedLanguage) {
    this.translationService.setLang(lang);
  }
}

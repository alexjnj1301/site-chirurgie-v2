import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

export type SupportedLanguage = 'fr' | 'en';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  private readonly http = inject(HttpClient);

  readonly availableLanguages: readonly SupportedLanguage[] = ['fr', 'en'] as const;
  readonly currentLang = signal<SupportedLanguage>('fr');
  readonly translations = signal<Record<string, any>>({});
  readonly isLoaded = signal<boolean>(false);

  private cache = new Map<SupportedLanguage, Record<string, any>>();

  async init(): Promise<void> {
    const saved = localStorage.getItem('app_lang') as SupportedLanguage | null;
    const initialLang: SupportedLanguage = saved && this.availableLanguages.includes(saved) ? saved : 'fr';
    await this.setLang(initialLang);
  }

  async setLang(lang: SupportedLanguage): Promise<void> {
    if (this.cache.has(lang)) {
      this.translations.set(this.cache.get(lang)!);
      this.currentLang.set(lang);
      this.persistAndSync(lang);
      return;
    }

    try {
      const data = await firstValueFrom(this.http.get<Record<string, any>>(`/i18n/${lang}.json`));
      this.cache.set(lang, data);
      this.translations.set(data);
      this.currentLang.set(lang);
      this.isLoaded.set(true);
      this.persistAndSync(lang);
    } catch (err) {
      console.error(`Failed to load translation file for ${lang}`, err);
    }
  }

  translate(key: string, params?: Record<string, string | number>): string {
    const dict = this.translations();
    if (!dict || !key) return key;

    const parts = key.split('.');
    let current: any = dict;

    for (const part of parts) {
      if (current && typeof current === 'object' && part in current) {
        current = current[part];
      } else {
        return key;
      }
    }

    if (typeof current !== 'string') {
      return key;
    }

    let result = current;
    if (params) {
      for (const [paramKey, paramValue] of Object.entries(params)) {
        result = result.replace(new RegExp(`{{\\s*${paramKey}\\s*}}`, 'g'), String(paramValue));
      }
    }

    return result;
  }

  private persistAndSync(lang: SupportedLanguage): void {
    try {
      localStorage.setItem('app_lang', lang);
      document.documentElement.lang = lang;
    } catch {
      // Ignore if running without storage access
    }
  }
}

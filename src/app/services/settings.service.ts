
import { Injectable } from '@angular/core';
import { UserSettings } from '../model.settings';

// settings.service.ts
@Injectable({ providedIn: 'root' })
export class SettingsService {

  private readonly STORAGE_KEY = 'user_settings';

  private settings: UserSettings = {
    nom: '',
    prenom: '',
    projectNumber: ''
  };

  constructor() {
    this.load();
  }

  get(): UserSettings {
    return this.settings;
  }

  set(newSettings: UserSettings): void {
    this.settings = newSettings;
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(newSettings));
  }

  private load(): void {
    const stored = localStorage.getItem(this.STORAGE_KEY);
    if (stored) {
      this.settings = JSON.parse(stored);
    }
  }
}
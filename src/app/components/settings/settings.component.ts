import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { SettingsService } from '../../services/settings.service';
import { UserSettings } from '../../model.settings';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './settings.component.html'
})
export class SettingsComponent {

  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private settingsService: SettingsService
  ) {
    this.form = this.fb.group({
      nom: [''],
      prenom: [''],
      projectNumber: ['']
    });

    this.form.patchValue(this.settingsService.get());
  }

  save(): void {
    this.settingsService.set(this.form.value as UserSettings);
  }
}
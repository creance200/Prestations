import { Routes } from '@angular/router';
import { TimeEntryComponent } from './components/time-entry/time-entry.component';
import { SettingsComponent } from './components/settings/settings.component';

export const routes: Routes = [
  { path: '', component: TimeEntryComponent },
  { path: 'settings', component: SettingsComponent }
];

import { Component } from '@angular/core';
import { TimeEntryComponent } from './components/time-entry/time-entry.component';

import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {}

import { Component } from '@angular/core';
import { TimeEntryComponent } from './components/time-entry/time-entry.component';

import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {}

import { Component } from '@angular/core';
import { TimeEntryComponent } from './components/time-entry/time-entry.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TimeEntryComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {}

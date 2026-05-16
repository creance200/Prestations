import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ProjectService } from '../../services/project.service';
import { HourTypeService } from '../../services/hour-type.service';

// Angular Material
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-time-entry',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatCardModule,
    MatProgressSpinnerModule
  ],
  templateUrl: './time-entry.component.html',
  styleUrls: ['./time-entry.component.scss']
})
export class TimeEntryComponent implements OnInit {

  form!: FormGroup;

  tasks: any[] = [];
  hourTypes: any[] = [];

  loadingTasks = false;
  loadingHourTypes = false;
  submitting = false;

  constructor(
    private fb: FormBuilder,
    private projectService: ProjectService,
    private hourTypeService: HourTypeService
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      projectNumber: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(15)]],
      task: [null, Validators.required],
      hourType: [null, Validators.required],
      hours: [null, [Validators.required, Validators.min(1), Validators.max(24)]]
    });

    this.loadHourTypes();

    this.form.get('projectNumber')?.valueChanges.subscribe(value => {
      if (value && value.length >= 6) {
        this.fetchTasks(value);
      } else {
        this.tasks = [];
        this.form.get('task')?.reset();
      }
    });

  }

loadHourTypes() {
  this.loadingHourTypes = true;

  this.hourTypeService.getHourTypes().subscribe({
    next: (response) => {
      console.log('NEXT', response);
      this.hourTypes = response.TypesHeure.map((type: string, index: number) => ({
        id: index + 1,
        label: type
      }));

      this.loadingHourTypes = false;
    },
    error: (err) => {
      this.loadingHourTypes = false;
      console.error('ERROR', err);
      alert("Erreur lors du chargement des types d'heures");

      // 🔴 Factice à supprimer quand l'API est stable
      this.hourTypes = [
        { id: 1, label: 'normal' },
        { id: 2, label: 'supplementaire' },
        { id: 3, label: 'samedi' },
        { id: 4, label: 'dimanche' }
      ];
    }
  });
}


  fetchTasks(projectNumber: string) {
    this.tasks = [
      { id: 101, name: 'Analyse' },
      { id: 102, name: 'Développement' },
      { id: 103, name: 'Tests' }
    ];

  }

  submit() {
    if (this.form.invalid) return;

    const payload = {
      projectNumber: this.form.value.projectNumber,
      taskId: this.form.value.task.id,
      hourTypeId: this.form.value.hourType.id,
      hours: this.form.value.hours
    };

    this.submitting = true;

    this.projectService.submitEntry(payload).subscribe({
      next: () => {
        this.submitting = false;
        alert('Enregistrement effectué');
        this.form.reset();
        this.tasks = [];
      },
      error: () => {
        this.submitting = false;
        alert('Erreur lors de l’enregistrement');
      }
    });
  }
}

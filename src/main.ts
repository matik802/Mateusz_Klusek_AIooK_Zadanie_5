import 'zone.js';
import {Component, LOCALE_ID} from '@angular/core';
import {bootstrapApplication} from '@angular/platform-browser';
import { StudentsComponent } from './students/students.component';

import { registerLocaleData } from '@angular/common';
import localePl from '@angular/common/locales/pl';
import { provideRouter, RouterModule, Routes } from '@angular/router';
import { EditStudentComponent } from './edit-student/edit-student.component';

registerLocaleData(localePl, 'pl');

@Component({
  selector: 'app-root',
  standalone: true,
  imports:[StudentsComponent,RouterModule],
  template: `
     <a routerLink="/show-students" routerLinkActive="active" ariaCurrentWhenActive="page">Wyświetl listę studentów</a>
     <router-outlet></router-outlet>
  `,
})
export class App {
  name = 'Angular';
}
export const routes: Routes = [
  { path: 'show-students', component: StudentsComponent },
  { path: 'edit-student/:id', 
  component: EditStudentComponent },
];
bootstrapApplication(App, {providers: [provideRouter(routes)]});



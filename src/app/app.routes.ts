import { Routes } from '@angular/router';
import { TestComponent } from './components/test/test.component';
import { ResultadoComponent } from './components/resultado/resultado.component';

export const appRoutes: Routes = [
  { path: '', component: TestComponent },
  { path: 'resultado', component: ResultadoComponent },
];



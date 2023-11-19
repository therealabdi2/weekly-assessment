import { Routes } from '@angular/router';
import { TodoListComponent } from './containers/todo-list/todo-list.component';

export const AdminRoutes: Routes = [
  { path: 'todos', component: TodoListComponent },
  { path: '', pathMatch: 'full', redirectTo: 'todos' },
];

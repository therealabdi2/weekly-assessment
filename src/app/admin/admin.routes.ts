import { Routes } from '@angular/router';

export const AdminRoutes: Routes = [
  {
    path: 'todos',
    loadComponent: () =>
      import('../admin/containers/todo-list/todo-list.component').then(
        (x) => x.TodoListComponent,
      ),
  },

  { path: '', pathMatch: 'full', redirectTo: 'todos' },
];

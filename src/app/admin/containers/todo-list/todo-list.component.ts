import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoCardComponent } from '../../components/todo-card/todo-card.component';
import { Todo } from '../../models/todo.model';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule, TodoCardComponent],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css',
})
export class TodoListComponent {
  todos: Todo[] = [
    { description: 'Start weekly assessment' },
    { description: 'Implement standalone components' },
  ];
}

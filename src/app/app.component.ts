import { NgFor } from "@angular/common";
import { Component, inject } from "@angular/core";

import { TodoItemComponent } from "./todo-item.component";
import { TodoService } from "./todo.service";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [NgFor, TodoItemComponent],
  template: `
    <div class="grid">
      <app-todo-item
        *ngFor="let todoItem of todoItems()"
        [todoItem]="todoItem"
        (complete)="onComplete(todoItem.id, $event)"
        (delete)="onDelete(todoItem.id)"
      />
    </div>
  `,
})
export class AppComponent {
  #todoService = inject(TodoService);

  todoItems = this.#todoService.todoItems;

  onComplete(id: number, isComplete: boolean): void {
    this.#todoService.setComplete(id, isComplete);
  }

  onDelete(id: number): void {
    this.#todoService.delete(id);
  }
}

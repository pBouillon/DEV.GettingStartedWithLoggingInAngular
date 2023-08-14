import { Injectable, signal } from "@angular/core";

import { TodoItem } from "./todo-item.model";

@Injectable({ providedIn: "root" })
export class TodoService {
  readonly #todoItems = signal<TodoItem[]>([
    {
      id: 1,
      title: "Finish this article",
      isDone: true,
    },
    {
      id: 2,
      title: "Prepare for the AI takeover",
      isDone: false,
    },
  ]);

  todoItems = this.#todoItems.asReadonly();

  delete(idToDelete: number): void {
    this.#todoItems.update((todoItems) =>
      todoItems.filter(({ id }) => id !== idToDelete)
    );
  }

  setComplete(idToSet: number, isDone: boolean): void {
    this.#todoItems.update((todoItems) =>
      todoItems.map((item) =>
        item.id === idToSet ? { ...item, isDone } : item
      )
    );
  }
}
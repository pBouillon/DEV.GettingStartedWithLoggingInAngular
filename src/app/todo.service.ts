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
    const isKnownId = this.#todoItems().some(({ id }) => id === idToDelete);
    if (!isKnownId) {
      console.warn("Unknown id #%d", idToDelete);
      return;
    }

    this.#todoItems.update((todoItems) =>
      todoItems.filter(({ id }) => id !== idToDelete)
    );

    console.log("Todo Item #%d deleted", idToDelete);
  }

  setComplete(idToSet: number, isDone: boolean): void {
    const isKnownId = this.#todoItems().some(({ id }) => id === idToSet);
    if (!isKnownId) {
      console.warn("Unknown id #%d", idToSet);
      return;
    }

    this.#todoItems.update((todoItems) =>
      todoItems.map((item) =>
        item.id === idToSet ? { ...item, isDone } : item
      )
    );

    console.log(
      "Todo Item #%d status set to %s",
      idToSet,
      isDone ? "done" : "pending"
    );
  }
}

import { NgIf } from "@angular/common";
import { Component, EventEmitter, Input, Output } from "@angular/core";

import { TodoItem } from "./todo-item.model";

@Component({
  selector: "app-todo-item",
  standalone: true,
  imports: [NgIf],
  template: `
    <article>
      <h4>
        <input
          type="checkbox"
          [id]="todoItem.id"
          [checked]="todoItem.isDone"
          (change)="onChange($event)"
        />

        <label [for]="todoItem.id">
          <del *ngIf="todoItem.isDone; else label">{{ todoItem.title }}</del>
          <ng-template #label>
            {{ todoItem.title }}
          </ng-template>
        </label>
      </h4>
      <footer>
        <button class="outline" (click)="onDelete()">❌ Remove</button>
      </footer>
    </article>
  `,
})
export class TodoItemComponent {
  @Input({ required: true }) todoItem!: TodoItem;

  @Output() complete = new EventEmitter<boolean>();
  @Output() delete = new EventEmitter<void>();

  onChange(event: any): void {
    const isChecked = event.target.checked;
    this.complete.emit(isChecked);
  }

  onDelete(): void {
    this.delete.emit();
  }
}

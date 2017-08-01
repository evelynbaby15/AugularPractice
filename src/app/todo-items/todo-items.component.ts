import { TodoItem } from './../shared/todo-item';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-items',
  templateUrl: './todo-items.component.html',
  styleUrls: ['./todo-items.component.css']
})
export class TodoItemsComponent implements OnInit {

  @Input() items: TodoItem[];

  @Output() deletTodoItem = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  delete(itemId) {
    // TODO 如何把 item 的 id 傳送出去?
    console.log('delete itemId', itemId);   
    this.deletTodoItem.emit(itemId);
  }


}

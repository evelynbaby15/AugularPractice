import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent implements OnInit {
  placeholdertext = '請輸入代辦事項';
  todoText = '';

  @Output() addTodoItem = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  addTodoEvent($event: MouseEvent) {
    this.addTodoItem.emit(this.todoText);
    console.log('Click btn addTodo.' + $event + ' 輸入的文字為：' + this.todoText);
  }

}

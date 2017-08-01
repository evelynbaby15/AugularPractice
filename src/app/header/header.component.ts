import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title = '歡迎來到 todo app';
  nowTime = new Date();

  constructor() { 
    //setInterval(() => this.nowTime = new Date(), 1000);
    Observable.interval(500)
      .subscribe(() => this.nowTime = new Date());
  }

  ngOnInit() {
  }

  getDate() {
    return new Date();
  }

}

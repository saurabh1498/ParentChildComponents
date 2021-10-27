import { Component, Input, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
 @Output() parentFunction:EventEmitter<any>=new EventEmitter()
  @Input() hero;
  constructor() { }

  ngOnInit():void {

    this.parentFunction.emit("saurabh")

  }

}

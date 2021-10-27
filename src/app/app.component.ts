import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'parentChild';
  d:any;
  data=
  [{
    name:'bruce',
    age:40,
    email:'bruce@gmail.com  '
    
  },{
    name:'peter',
    age:20,
    email:'peter@gmail.com  '
    
  }
];

parentFunction(data)
{
  console.warn(data);
  this.d=data;

}

}

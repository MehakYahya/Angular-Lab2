import { Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import{from} from 'rxjs';
import {FormsModule} from '@angular/forms';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]

})
export class AppComponent  {
  name = ' Student-management';
  input="";
  age: number;
  email: string;
  course: string;
}

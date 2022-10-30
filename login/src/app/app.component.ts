import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HomeService } from './services/home/home.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'login';
  onSubmit(f: NgForm) {
    if(!f.valid){
      console.log('invalid data');
      return;
    }


  }

  constructor() {


  }
}

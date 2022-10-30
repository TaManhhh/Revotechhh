import { Component, OnInit} from '@angular/core';
import { NgForm, Validators } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { postDataForm } from 'src/app/services/login/login.service';
import { API_DEFAUT } from 'src/app/API/login/login';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {


  date = new FormGroup({
    startGraduate: new FormControl<Date | null>(null),
    endGraduate: new FormControl<Date | null>(null),
    dob: new FormControl('', Validators.required)
  });

  selected = 'option1';

  onSubmit() {
    console.log(this.signInForm)
    console.log(postDataForm.post(API_DEFAUT.apiForm,this.signInForm.value))

  }

  constructor() {}

  public signInForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    address: new FormControl('', Validators.required),
    password: new FormControl('', [Validators.required ,Validators.maxLength(20),Validators.minLength(6)]),
    number: new FormControl('', [Validators.required ,Validators.maxLength(10),Validators.minLength(10)]),
    gioiTinh: new FormControl('', Validators.required),
    dateTime: new FormControl(['',''], Validators.required),

  });


  public changeGender(e:any) {
    this.signInForm.value.gioiTinh = e.value
    console.log(this.signInForm.value)
  }
  public dateRangeChange(start:any,end:any){
    this.signInForm.value.dateTime![0] = start.value
    this.signInForm.value.dateTime![1] = end.value
    console.log(this.signInForm.value)
  };


  ngOnInit(): void
    {

    }

  selectedGender(e:any){
    this.signInForm.value.gioiTinh = e.value
    console.log(this.signInForm.value.gioiTinh)
    console.log(postDataForm.post(API_DEFAUT.apiForm,this.signInForm.value))
  }
}

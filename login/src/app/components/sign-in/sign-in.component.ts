import { Component, OnInit } from '@angular/core';
import { TVMService } from 'src/app/services/TVM.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor( private TVMService:TVMService) { }

  ngOnInit() :void{
    this.verificarTokenUrlCallBack();
  }

verificarTokenUrlCallBack(){
  const token =this.TVMService.tokenUrlcallback();
  if(!!token){
    this.TVMService.definirAccessToken(token);
  }
}

  signIn(){
    window.location.href=this.TVMService.UrlLogin();
  }


}

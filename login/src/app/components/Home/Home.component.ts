import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/services/home/home.service';

@Component({
  selector: 'app-Home',
  templateUrl: './Home.component.html',
  styleUrls: ['./Home.component.css']
})
export class HomeComponent implements OnInit {

  music:any;
  constructor(private home:HomeService) { }

  ngOnInit(): void {
    this.home.getList().subscribe(res=>{
      this.music=res.top100_VN;
      console.log(this.music)
    })
  }

}

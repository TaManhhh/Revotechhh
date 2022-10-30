import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { API_Home } from 'src/app/API/home/home';
import { Observable } from 'rxjs';
import { HomeComponent } from 'src/app/components/Home/Home.component';
@Injectable({
  providedIn: 'root'
})
export class HomeService {

constructor( private http:HttpClient) { }

getList():Observable<any>{
  // let url='https://api.apify.com/v2/key-value-stores/EJ3Ppyr2t73Ifit64/records/LATEST'
  return this.http.get<any>(API_Home.apiMusic );
}

}

// import axios from 'axios';


// export const postMusic = {
//   post: async function (url: string, data: any) {
//     const res = await axios.post(url, data);
//     console.log(res.data);
//     return res.data;
//   },
//   test: (data: any) => console.log(data),
// };

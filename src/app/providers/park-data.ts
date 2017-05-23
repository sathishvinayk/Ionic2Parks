import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class ParkData{
  data:any=null;
  constructor(public http: Http){

  }
  load(){
    if(this.data){
      //if the data varaible has the Json, then resolve a promise
      return Promise.resolve(this.data);
    }
    //if data varaiable has no JSON, then return a basic promise object
    return new Promise(resolve=>{
      this.http.get('assets/data/data.json').map(res=>res.json()).subscribe(data=>{
        this.data=data;
        resolve(this.data);
      })
    })
  }
}

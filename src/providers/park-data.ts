import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class ParkData{
  data:any=null;
  constructor(public http: Http){

  }
  //Since we hardcoded file's location that we are loading,our method is not taking in a source location.
  //So hence we can use load()
  load(){
    if(this.data){
      //if the data varaible has the Json, then resolve a promise
      return Promise.resolve(this.data);
    }
    //if data varaiable has no JSON, then return a basic promise object
    return new Promise(resolve=>{
      //Call the http.get to get Json and assigning it to a variable named res
      //Finally resolving our promise with actual data
      this.http.get('assets/data/data.json').map(res=>res.json()).subscribe(data=>{
        this.data=data;
        resolve(this.data);
      });
    });
  }
}

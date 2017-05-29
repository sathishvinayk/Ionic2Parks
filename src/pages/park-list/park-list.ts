import { Component } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';
import { ParkData } from "../../providers/park-data"; // Importing the service here
import {ParkDetails} from "../park-details/park-details";

@Component({
  selector: 'page-park-list',
  templateUrl: 'park-list.html'
})
export class ParkListPage {
  parks: Array<Object>=[];
  searchQuery:string='';

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public parkData: ParkData){
    parkData.getParks().then(theResult=>{
      this.parks=theResult;
    })
  }
  goParkDetails(theParkData){
    this.navCtrl.push(ParkDetails, {
      parkData: theParkData
    });
  }
  //Create a new getParks which will listen to events
  getParks(event){
    //Reset items back to all of items
    this.parkData.getParks().then(theResult=>{
      this.parks=theResult;
    })
    let queryString=event.target.value;
    if(queryString!==undefined){
      //if value is empty string, dont filter the items
      if(queryString.trim()==''){
        return;
      }
      //In the reaader its parkData.getFilteredParks,
      //Due to that the problem occured.
      //So we need to write it as this.getFilteredParks.
      this.getFilteredParks(queryString).then(theResult=>{
        this.parks=theResult;
      })
    }
  }
  getFilteredParks(queryString){
    //We need to call load() function from parkData class from park-data.ts file
    return this.parkData.load().then(Parks=>{
      //Creating a new empty array
      let theFilteredParks:any=[];
      //Looping thru parkData from park-data.ts and assigning to the empty array
      for(let thePark of Parks){
        if(thePark.name.toLowerCase().indexOf(queryString.toLowerCase())>-1){
          theFilteredParks.push(thePark);
        }
      }
      return theFilteredParks;
    })
  }
  //Resetting the array to initial value
  resetList(event){
    this.parkData.getParks().then(theResult=>{
      this.parks=theResult;
    })
  }
  customHeaderFn(record, recordIndex, records){
    if(recordIndex>0){
      if(record.name.charAt(0)!==records[recordIndex-1].name.charAt(0)){
        return record.name.charAt(0);
      }else {
        return null;
      }
    }else {
      return record.name.charAt(0);
    }
  }
}

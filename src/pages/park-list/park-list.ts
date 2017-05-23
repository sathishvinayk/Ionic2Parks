import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ParkData } from "../../providers/park-data"; // Importing the service here
import {ParkDetails} from "../park-details/park-details";

@Component({
  selector: 'page-park-list',
  templateUrl: 'park-list.html'
})
export class ParkListPage {
  parks: Array<Object>=[];
  constructor(public navCtrl: NavController, public navParams: NavParams,public parkData: ParkData){
    parkData.getParks().then(theResult=>{
      this.parks=theResult;
    })
  }
  goParkDetails(theParkData){
    this.navCtrl.push(ParkDetails, {
      parkData: theParkData
    });
  }
}

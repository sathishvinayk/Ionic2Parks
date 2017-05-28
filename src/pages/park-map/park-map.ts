import { Component } from '@angular/core';
import { Platform, NavController, NavParams } from 'ionic-angular';
import {} from '@types/googlemaps';
import { Park } from "../../interfaces/park";
import { ParkData }from "../../providers/park-data";

@Component({
  selector: 'page-park-map',
  templateUrl: 'park-map.html'
})

export class ParkMapPage {
  parks: Array<Park>=[];
  map: google.maps.Map;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public platform: Platform,
              public parkData: ParkData) {
    this.map=null;
    this.platform.ready().then(()=>{
      //Call the ionViewDidLoad() here.
      this.ionViewDidLoad();
    });
  }
  ionViewDidLoad(){
    //set timeout so that Dom loads
    setTimeout(()=>{
      //Call the initializeMap here
      this.initializeMap();
    },500)
  }
  initializeMap(){
    let minZoomLevel=3;
    let image="assets/img/nps_arrowhead.png";
    this.map=new google.maps.Map(document.getElementById('map_canvas'),{
      zoom:minZoomLevel,
      center: new google.maps.LatLng(39.833, -98.583),
      mapTypeControl: false,
      streetViewControl: false,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });
    this.parkData.getParks().then(theResult=>{
      console.log(typeof(ParkData));
      this.parks=theResult;
      for(let thePark of this.parks){
        let parkPos:google.maps.LatLng=
          new google.maps.LatLng(thePark.lat, thePark.long);
        let parkMarker:google.maps.Marker=new google.maps.Marker();
        parkMarker.setPosition(parkPos);
        parkMarker.setMap(this.map);
        parkMarker.setIcon(image);
      }
    });
  }
};

import { Component } from '@angular/core';
import { Platform, NavController, NavParams } from 'ionic-angular';
import {} from '@types/googlemaps';

@Component({
  selector: 'page-park-map',
  templateUrl: 'park-map.html'
})
export class ParkMapPage {
  map: google.maps.Map;
  constructor(public navCtrl: NavController, public navParams: NavParams, public platform: Platform) {
    this.map=null;
    this.platform.ready().then(()=>{
      this.initializeMap();
    });
  }
  initializeMap(){
    let minZoomLevel=3;
    this.map=new google.maps.Map(document.getElementById('map_canvas'),{
      zoom:minZoomLevel,
      center: new google.maps.LatLng(39.833, -98.583),
      mapTypeControl: false,
      streetViewControl: false,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });
  };
}

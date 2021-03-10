import { Injectable } from '@angular/core';
import { Locations } from './Models/locations';
import { Objects } from './Models/objects';
import  *  as  objectJSON  from 'src/assets/escape-game/Objects.json';
import  *  as  locationJSON  from 'src/assets/escape-game/Locations.json';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  objectsData : any = objectJSON;
  locationsData : any = locationJSON;
  allObjects : Objects[] = [];
  allLocations: Locations[] = [];

  constructor() { }

  getObjects() {
    this.objectsData.default.forEach(obj => {
      this.allObjects.push(new Objects(obj));
    });
    return this.allObjects;
  }

  getLocations() {
    this.locationsData.default.forEach(obj => {
      this.allLocations.push(new Locations(obj));
    });
    return this.allLocations;

  }

  getObjectByID(id : number) {
    //console.log(this.objectsData.default);
    return this.objectsData.default.find(obj => obj.id == id);
  }

  getLocationByID(id : number) {
    //console.log(this.locationsData.default);
    return this.locationsData.default.find(loc => loc.id == id);
  }

}

import { Injectable } from '@angular/core';
import { Locations } from './Models/locations';
import { Directions } from './Models/directions';
import { Objects } from './Models/objects';
import  *  as  objectJSON  from 'src/assets/escape-game/Objects.json';
import  *  as  locationJSON  from 'src/assets/escape-game/Locations.json';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  allObjects: Objects[] = (objectJSON as any).default;
  allLocations: Locations[] = (locationJSON as any).default;

  constructor() { }

  getObjects(): Objects[] {
    const objects = this.allObjects;
    return objects;
  }

  getLocations() {
    let locations = new Array<Locations>();
    console.log(this.allLocations[0]);
    locations[0] = this.allLocations[0];
    console.log(locations[0].id);

  }

}

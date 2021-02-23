import { Objects } from "./objects";
import { Directions } from "./directions";

export class Locations {
  id: number;
  name: string;
  description: string;
  objects : Objects[];
  directions : Directions[];

  deserialize(input) {
    this.id = input.id;

    this.name = input.name;
    this.description = input.description;
    this.objects = new Array<Objects>().deserialize(input.objects);
    this.directions = new Array<Directions>().deserialize(input.directions);

    return this;
}

}


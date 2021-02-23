export class Objects {
  id:number;
  name: string;
  usable: boolean;
  weight: number;
  damage: number;

  deserialize(input) {
    this.id = input.id;

    this.name = input.name;
    this.name = input.name;
    this.usable = input.usable;
    this.weight = input.weight;
    this.damage = input.damage;

    return this;
}
}

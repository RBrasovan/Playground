import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { GameService } from '../game.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  placeholder : string;
  formgroup = new FormGroup({
  input : new FormControl('')
  });
  inputs : string[] = [];
  textAreaText : string;

  constructor(private gameService: GameService) { }

  ngOnInit(): void {
    this.placeholder = "Welcome to Escape!"
    this.gameService.getObjects();
    this.gameService.getLocations();
  }

  update() {
    if(this.formgroup.valid) {
      this.inputs.push(this.formgroup.value.input)
      console.log(document.getElementById("gameArea").clientHeight);
      this.textAreaText = this.inputs.toString().replace(/,/g,"\n");
      this.actions(this.inputs[this.inputs.length - 1]);
      this.formgroup.reset();
    }
  }

  actions(line : string) {
    let lineComponents = [];
    lineComponents = line.split(' ');

    switch(lineComponents[0]) {
      case "go": {
        console.log("You've gone somewhere");
        break;
      }
      case "pickup": {
        console.log("You've pickup something");
        break;
      }
      case "use": {
        console.log("You've used something");
        break;
      }
      default: {
        console.log("You've done nothing");
      }
    }
  }
}

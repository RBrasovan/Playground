import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { GameService } from '../game.service';
import {BehaviorSubject, Observable} from 'rxjs'
import { Objects } from '../Models/objects';
import { Locations } from '../Models/locations';

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
  objects : Objects[];
  locations : Locations[];

  constructor(private gameService: GameService) { }

  ngOnInit(): void {
    this.placeholder = "Welcome to Escape!"
    this.objects = this.gameService.getObjects();
    this.locations = this.gameService.getLocations();
    console.log(this.gameService.getObjectByID(3));
  }

  update() {
    if(this.formgroup.valid) {
      this.inputs.push(this.formgroup.value.input)
      this.inputs.push('\n')
      this.textAreaText = this.inputs.toString();
      console.log(this.textAreaText);
      this.textAreaText = this.textAreaText.replace(/,/g , '');
      console.log(this.textAreaText);
      this.actions(this.inputs[this.inputs.length - 1]);
      this.formgroup.reset();
      document.getElementById("gameArea").scrollTop = document.getElementById("gameArea").scrollHeight;
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

import { Component, OnInit } from '@angular/core';
import { faGem } from '@fortawesome/free-regular-svg-icons';
import { faSkullCrossbones, faBookDead, faSkull, faCoins } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-bootstrap-ship',
  templateUrl: './bootstrap-ship.component.html',
  styleUrls: ['./bootstrap-ship.component.css']
})
export class BootstrapShipComponent implements OnInit {
  title='booty';
  faGem = faGem;
  faCrossbones = faSkullCrossbones;
  faBookDead = faBookDead;
  faSkull = faSkull;
  faCoins = faCoins;

  constructor() { }

  ngOnInit(): void {
  }

  noWhere() {
    alert('This goes nowhere, mate.');
  }

  noBooty() {
    alert('No booty for you.');
  }

}

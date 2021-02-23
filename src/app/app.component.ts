import { Component, OnDestroy } from '@angular/core';
import { NavigationStart, Router, Event as NavigationEvent } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  specialtyPage : boolean;
  event$;

  constructor(private router: Router) {
    this.event$
      =this.router.events
          .subscribe(
            (event: NavigationEvent) => {
              if(event instanceof NavigationStart) {
                if(event.url.includes("bootstrap-ship")) {
                  this.specialtyPage = true;
                }
                else {
                  this.specialtyPage = false;
                }
              }
            });
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.event$.unsubscribe();
  }
}

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BootstrapShipComponent } from './bootstrap-ship.component';

describe('BootstrapShipComponent', () => {
  let component: BootstrapShipComponent;
  let fixture: ComponentFixture<BootstrapShipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BootstrapShipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BootstrapShipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

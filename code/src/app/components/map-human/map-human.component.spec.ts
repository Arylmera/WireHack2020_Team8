import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapHumanComponent } from './map-human.component';

describe('MapHumanComponent', () => {
  let component: MapHumanComponent;
  let fixture: ComponentFixture<MapHumanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapHumanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapHumanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

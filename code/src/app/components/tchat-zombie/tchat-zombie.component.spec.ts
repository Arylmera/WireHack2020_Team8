import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TchatZombieComponent } from './tchat-zombie.component';

describe('TchatZombieComponent', () => {
  let component: TchatZombieComponent;
  let fixture: ComponentFixture<TchatZombieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TchatZombieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TchatZombieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

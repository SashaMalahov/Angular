import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoffeeElectionComponentComponent } from './coffee-election-component.component';

describe('CoffeeElectionComponentComponent', () => {
  let component: CoffeeElectionComponentComponent;
  let fixture: ComponentFixture<CoffeeElectionComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoffeeElectionComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoffeeElectionComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

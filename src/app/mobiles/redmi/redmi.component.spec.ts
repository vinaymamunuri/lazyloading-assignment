import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedmiComponent } from './redmi.component';

describe('RedmiComponent', () => {
  let component: RedmiComponent;
  let fixture: ComponentFixture<RedmiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedmiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedmiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

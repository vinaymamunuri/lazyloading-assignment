import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MensfashionsComponent } from './mensfashions.component';

describe('MensfashionsComponent', () => {
  let component: MensfashionsComponent;
  let fixture: ComponentFixture<MensfashionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MensfashionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MensfashionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

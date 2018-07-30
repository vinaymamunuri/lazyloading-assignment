import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferszoneComponent } from './offerszone.component';

describe('OfferszoneComponent', () => {
  let component: OfferszoneComponent;
  let fixture: ComponentFixture<OfferszoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfferszoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfferszoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

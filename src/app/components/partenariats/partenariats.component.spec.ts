import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartenariatsComponent } from './partenariats.component';

describe('PartenariatsComponent', () => {
  let component: PartenariatsComponent;
  let fixture: ComponentFixture<PartenariatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartenariatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartenariatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

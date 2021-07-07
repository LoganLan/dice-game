import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoOneWinsPageComponent } from './no-one-wins-page.component';

describe('WinngingPageComponent', () => {
  let component: NoOneWinsPageComponent;
  let fixture: ComponentFixture<NoOneWinsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoOneWinsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoOneWinsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

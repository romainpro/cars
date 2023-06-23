import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeCarsComponent } from './liste-cars.component';

describe('ListeCarsComponent', () => {
  let component: ListeCarsComponent;
  let fixture: ComponentFixture<ListeCarsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListeCarsComponent]
    });
    fixture = TestBed.createComponent(ListeCarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

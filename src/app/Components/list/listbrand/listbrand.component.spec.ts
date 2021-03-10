import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListbrandComponent } from './listbrand.component';

describe('ListbrandComponent', () => {
  let component: ListbrandComponent;
  let fixture: ComponentFixture<ListbrandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListbrandComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListbrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

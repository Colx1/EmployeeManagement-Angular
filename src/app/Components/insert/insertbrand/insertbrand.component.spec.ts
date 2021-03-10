import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertbrandComponent } from './insertbrand.component';

describe('InsertbrandComponent', () => {
  let component: InsertbrandComponent;
  let fixture: ComponentFixture<InsertbrandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertbrandComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertbrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

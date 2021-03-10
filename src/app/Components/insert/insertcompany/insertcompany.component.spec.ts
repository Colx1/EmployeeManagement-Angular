import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertcompanyComponent } from './insertcompany.component';

describe('InsertcompanyComponent', () => {
  let component: InsertcompanyComponent;
  let fixture: ComponentFixture<InsertcompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertcompanyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertcompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

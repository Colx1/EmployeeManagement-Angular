import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListcompanyComponent } from './listcompany.component';

describe('ListcompanyComponent', () => {
  let component: ListcompanyComponent;
  let fixture: ComponentFixture<ListcompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListcompanyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListcompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditcompanyComponent } from './editcompany.component';

describe('EditcompanyComponent', () => {
  let component: EditcompanyComponent;
  let fixture: ComponentFixture<EditcompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditcompanyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditcompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

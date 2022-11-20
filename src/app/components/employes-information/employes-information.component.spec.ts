import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployesInformationComponent } from './employes-information.component';

describe('EmployesInformationComponent', () => {
  let component: EmployesInformationComponent;
  let fixture: ComponentFixture<EmployesInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployesInformationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployesInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

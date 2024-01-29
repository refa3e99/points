import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfEmployeesComponent } from './list-of-employees.component';

describe('ListOfEmployeesComponent', () => {
  let component: ListOfEmployeesComponent;
  let fixture: ComponentFixture<ListOfEmployeesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListOfEmployeesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListOfEmployeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

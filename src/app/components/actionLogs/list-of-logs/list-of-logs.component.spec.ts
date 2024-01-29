import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfLogsComponent } from './list-of-logs.component';

describe('ListOfLogsComponent', () => {
  let component: ListOfLogsComponent;
  let fixture: ComponentFixture<ListOfLogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListOfLogsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListOfLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

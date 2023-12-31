import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinroomComponent } from './joinroom.component';

describe('JoinroomComponent', () => {
  let component: JoinroomComponent;
  let fixture: ComponentFixture<JoinroomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JoinroomComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JoinroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

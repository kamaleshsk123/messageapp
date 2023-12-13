import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateidComponent } from './createid.component';

describe('CreateidComponent', () => {
  let component: CreateidComponent;
  let fixture: ComponentFixture<CreateidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateidComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

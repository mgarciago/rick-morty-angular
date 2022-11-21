import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationsDetailComponent } from './creations-detail.component';

describe('CreationsDetailComponent', () => {
  let component: CreationsDetailComponent;
  let fixture: ComponentFixture<CreationsDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreationsDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreationsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatesforallridingsComponent } from './candidatesforallridings.component';

describe('CandidatesforallridingsComponent', () => {
  let component: CandidatesforallridingsComponent;
  let fixture: ComponentFixture<CandidatesforallridingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CandidatesforallridingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CandidatesforallridingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistrictcandidatesComponent } from './districtcandidates.component';

describe('DistrictcandidatesComponent', () => {
  let component: DistrictcandidatesComponent;
  let fixture: ComponentFixture<DistrictcandidatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DistrictcandidatesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DistrictcandidatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

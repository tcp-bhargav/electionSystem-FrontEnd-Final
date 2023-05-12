import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalsbyridingComponent } from './totalsbyriding.component';

describe('TotalsbyridingComponent', () => {
  let component: TotalsbyridingComponent;
  let fixture: ComponentFixture<TotalsbyridingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotalsbyridingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TotalsbyridingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

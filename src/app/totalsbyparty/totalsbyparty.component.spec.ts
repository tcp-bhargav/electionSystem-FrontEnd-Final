import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalsbypartyComponent } from './totalsbyparty.component';

describe('TotalsbypartyComponent', () => {
  let component: TotalsbypartyComponent;
  let fixture: ComponentFixture<TotalsbypartyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotalsbypartyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TotalsbypartyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

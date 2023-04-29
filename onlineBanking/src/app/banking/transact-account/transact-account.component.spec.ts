import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactAccountComponent } from './transact-account.component';

describe('TransactAccountComponent', () => {
  let component: TransactAccountComponent;
  let fixture: ComponentFixture<TransactAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransactAccountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransactAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

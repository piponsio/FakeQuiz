import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FichaGatitosComponent } from './ficha-gatitos.component';

describe('FichaGatitosComponent', () => {
  let component: FichaGatitosComponent;
  let fixture: ComponentFixture<FichaGatitosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FichaGatitosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FichaGatitosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

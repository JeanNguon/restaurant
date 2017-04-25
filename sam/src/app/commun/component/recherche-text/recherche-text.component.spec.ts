import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercheTextComponent } from './recherche-text.component';

describe('RechercheTextComponent', () => {
  let component: RechercheTextComponent;
  let fixture: ComponentFixture<RechercheTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RechercheTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RechercheTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

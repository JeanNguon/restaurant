import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercheTagComponent } from './recherche-tag.component';

describe('RechercheTagComponent', () => {
  let component: RechercheTagComponent;
  let fixture: ComponentFixture<RechercheTagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RechercheTagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RechercheTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CambiarmonedaComponent } from './cambiarmoneda.component';

describe('CambiarmonedaComponent', () => {
  let component: CambiarmonedaComponent;
  let fixture: ComponentFixture<CambiarmonedaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CambiarmonedaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CambiarmonedaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioSinginComponent } from './formulario-singin.component';

describe('FormularioSinginComponent', () => {
  let component: FormularioSinginComponent;
  let fixture: ComponentFixture<FormularioSinginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormularioSinginComponent]
    });
    fixture = TestBed.createComponent(FormularioSinginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevacompraComponent } from './nuevacompra.component';

describe('NuevacompraComponent', () => {
  let component: NuevacompraComponent;
  let fixture: ComponentFixture<NuevacompraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NuevacompraComponent]
    });
    fixture = TestBed.createComponent(NuevacompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

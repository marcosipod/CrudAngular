import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TiendaCreateComponent } from './tienda-create.component';

describe('TiendaCreateComponent', () => {
  let component: TiendaCreateComponent;
  let fixture: ComponentFixture<TiendaCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TiendaCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TiendaCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

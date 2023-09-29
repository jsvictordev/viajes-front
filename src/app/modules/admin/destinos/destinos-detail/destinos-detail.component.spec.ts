import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DestinosDetailComponent } from './destinos-detail.component';

describe('DestinosDetailComponent', () => {
  let component: DestinosDetailComponent;
  let fixture: ComponentFixture<DestinosDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DestinosDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DestinosDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

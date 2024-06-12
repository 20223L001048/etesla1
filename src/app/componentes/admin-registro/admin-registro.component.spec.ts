import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRegistroComponent } from './admin-registro.component';

describe('AdminRegistroComponent', () => {
  let component: AdminRegistroComponent;
  let fixture: ComponentFixture<AdminRegistroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminRegistroComponent]
    });
    fixture = TestBed.createComponent(AdminRegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
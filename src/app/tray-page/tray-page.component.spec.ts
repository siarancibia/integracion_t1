import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrayPageComponent } from './tray-page.component';

describe('TrayPageComponent', () => {
  let component: TrayPageComponent;
  let fixture: ComponentFixture<TrayPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrayPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrayPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

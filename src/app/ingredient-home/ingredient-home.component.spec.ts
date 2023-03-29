import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredientHomeComponent } from './ingredient-home.component';

describe('IngredientHomeComponent', () => {
  let component: IngredientHomeComponent;
  let fixture: ComponentFixture<IngredientHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngredientHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IngredientHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

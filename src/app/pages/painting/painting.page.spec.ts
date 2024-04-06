import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PaintingPage } from './painting.page';

describe('PaintingPage', () => {
  let component: PaintingPage;
  let fixture: ComponentFixture<PaintingPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PaintingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

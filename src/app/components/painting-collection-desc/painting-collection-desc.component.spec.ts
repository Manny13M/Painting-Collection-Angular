import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PaintingCollectionDescComponent } from './painting-collection-desc.component';

describe('PaintingCollectionDescComponent', () => {
  let component: PaintingCollectionDescComponent;
  let fixture: ComponentFixture<PaintingCollectionDescComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PaintingCollectionDescComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PaintingCollectionDescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

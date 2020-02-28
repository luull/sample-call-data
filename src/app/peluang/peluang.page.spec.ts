import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PeluangPage } from './peluang.page';

describe('PeluangPage', () => {
  let component: PeluangPage;
  let fixture: ComponentFixture<PeluangPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeluangPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PeluangPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

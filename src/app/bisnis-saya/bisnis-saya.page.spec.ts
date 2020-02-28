import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BisnisSayaPage } from './bisnis-saya.page';

describe('BisnisSayaPage', () => {
  let component: BisnisSayaPage;
  let fixture: ComponentFixture<BisnisSayaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BisnisSayaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BisnisSayaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BrosurPage } from './brosur.page';

describe('BrosurPage', () => {
  let component: BrosurPage;
  let fixture: ComponentFixture<BrosurPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrosurPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BrosurPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

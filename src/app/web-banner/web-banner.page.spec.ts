import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WebBannerPage } from './web-banner.page';

describe('WebBannerPage', () => {
  let component: WebBannerPage;
  let fixture: ComponentFixture<WebBannerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebBannerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WebBannerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProdukSayaPage } from './produk-saya.page';

describe('ProdukSayaPage', () => {
  let component: ProdukSayaPage;
  let fixture: ComponentFixture<ProdukSayaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdukSayaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProdukSayaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

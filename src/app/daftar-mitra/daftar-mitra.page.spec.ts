import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DaftarMitraPage } from './daftar-mitra.page';

describe('DaftarMitraPage', () => {
  let component: DaftarMitraPage;
  let fixture: ComponentFixture<DaftarMitraPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DaftarMitraPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DaftarMitraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

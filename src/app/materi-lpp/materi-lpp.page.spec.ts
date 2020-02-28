import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MateriLppPage } from './materi-lpp.page';

describe('MateriLppPage', () => {
  let component: MateriLppPage;
  let fixture: ComponentFixture<MateriLppPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MateriLppPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MateriLppPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

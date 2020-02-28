import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TestimoniPage } from './testimoni.page';

describe('TestimoniPage', () => {
  let component: TestimoniPage;
  let fixture: ComponentFixture<TestimoniPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestimoniPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TestimoniPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

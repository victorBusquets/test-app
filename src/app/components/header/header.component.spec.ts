import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RandomImageService } from 'src/app/modules/random-image/services/random-image.service';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  const appTitle = 'Lorem Ipsum App';
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let compiled;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
      providers: [ RandomImageService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    compiled = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have title 'Lorem Ipsum App'`, async(() => {
    expect(component.title).toEqual(appTitle);
  }));

  it('should render title test', () => {
    expect(compiled.querySelector('.navbar-brand').textContent).toContain(appTitle);
  });

});

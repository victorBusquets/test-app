import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RandomImageService } from '../../services/random-image.service';

import { RandomImageListComponent } from './random-image-list.component';

describe('RandomImageListComponent', () => {
  const randomImage = {
    id: 1,
    photo: 'https://picsum.photos/id/1/500/500',
    text: 'lorem ipsum'
  };
  let component: RandomImageListComponent;
  let fixture: ComponentFixture<RandomImageListComponent>;
  let compiled;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RandomImageListComponent ],
      providers: [ RandomImageService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomImageListComponent);
    component = fixture.componentInstance;
    compiled = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show no result message test', () => {
    component.randomImages = [];
    fixture.detectChanges();
    expect(compiled.querySelector('.no-result-message')).toBeTruthy();
  });

  it('should not show no result message test', () => {
    component.randomImages = [randomImage];
    fixture.detectChanges();
    expect(compiled.querySelector('.no-result-message')).toBeFalsy();
  });
});

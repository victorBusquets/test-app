import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HighlightText } from '../../pipes/highlight.pipe';

import { RandomImageItemComponent } from './random-image-item.component';



describe('RandomImageItemComponent', () => {
  const randomImage = {
    id: 1,
    photo: 'https://picsum.photos/id/1/500/500',
    text: 'lorem ipsum'
  };
  const searchText = 'lorem';
  let component: RandomImageItemComponent;
  let fixture: ComponentFixture<RandomImageItemComponent>;
  let compiled;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RandomImageItemComponent, HighlightText]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomImageItemComponent);
    component = fixture.componentInstance;
    compiled = fixture.nativeElement;
    component.randomImage = randomImage;
    component.searchText = '';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render photo test', () => {
    expect(compiled.querySelector('.card-text').textContent).toContain(randomImage.text);
  });

  it('should render image test', () => {
    expect(compiled.querySelector('.card-img-top').src).toContain(randomImage.photo);
  });

  it('should remark search text test', () => {
    component.searchText = searchText;
    fixture.detectChanges();
    expect(compiled.querySelector('.remark').textContent).toContain(searchText);
  });

});

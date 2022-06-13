import { PostComponent } from './postComponent';
import { ComponentFixture, async, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';

describe('Unit Tests : Post Component', () => {
  //global variable
  let component: PostComponent;

  //only once for a spec
  //before -> setup
  beforeAll(() => { });
  //after -> teardown
  afterAll(() => {
    //component = null;
  });

  //every time for a spec
  beforeEach(() => {
    //Arrange
    component = new PostComponent();
    component.globalTotalLikes = 3;
  });

  afterEach(() => {});

  it('Should increase likes', () => {
    //Act
    component.like();
    //Assert
    expect(component.globalTotalLikes).toBe(4);
  });

  it('Should decrease likes', () => {
    component.dislike()
    expect(component.globalTotalLikes).toBe(2);
  });
  //Assert
  it('Should decrease likes only if the totallikes is not 0', () => {
    component.globalTotalLikes = 0;
    component.dislike()
    expect(component.globalTotalLikes).not.toBe(-1);
  });

});

describe('Integration tests : Post Component', () => {
  let component: PostComponent;
  let fixture: ComponentFixture<PostComponent>;

  beforeEach(async () =>{
    TestBed.configureTestingModule({
      declarations: [PostComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should Create', () =>{
    expect(component).toBeTruthy();
  });

  it('Should Display Global total likes', () => {
    let debugElement =  fixture.debugElement.query(By.css('.globalTotalLikes'));
    let htmlElement:HTMLElement = debugElement.nativeElement;
    expect(htmlElement.innerText).toContain('0');
  });
});

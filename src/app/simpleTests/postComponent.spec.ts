import { PostComponent } from './postComponent';

describe('Post Component', () => {
  //global variable
  let component:PostComponent;

  // only once
  beforeAll(() => { });
  afterAll(() => { });

  // every time for a spec
  beforeEach(() => {
    //Arrange
    component = new PostComponent();
    component.totalLikes = 3;
  });

  afterEach(() => {
    //component = null;
  });

  it('Should increase likes', () => {
    //Arrange
    component = new PostComponent();
    //Act
    component.like();
    //Assert
    expect(component.totalLikes).toBe(4);
  });

  it('Should decrease likes', () => {
    component = new PostComponent();

    component.dislike()
    expect(component.totalLikes).toBe(2);
  });

});

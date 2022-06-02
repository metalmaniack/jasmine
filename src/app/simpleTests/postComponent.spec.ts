import { PostComponent } from './postComponent';

describe('Post Component', () => {
  //global variable
  let component: PostComponent;

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
    //Act
    component.like();
    //Assert
    expect(component.totalLikes).toBe(4);
  });

  it('Should decrease likes', () => {

    component.dislike()
    expect(component.totalLikes).toBe(2);
  });
  //Assert
  it('Should decrease likes only if the totallikes is not 0', () => {
    component.dislike()
    expect(component.totalLikes).not.toBe(-1);
  });

});

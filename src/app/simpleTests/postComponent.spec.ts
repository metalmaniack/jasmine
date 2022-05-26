import { PostComponent } from './postComponent';

describe('Post Component', ()=>{
  it('Should increase likes',()=>{
      //Arrange
      let component = new PostComponent();
      //Act
      component.like();
      //Assert
      expect(component.totalLikes).toBe(1);
  });

  it('Should decrease likes',()=>{
    let component = new PostComponent();

    component.dislike()
     // expect(component.totalLikes).toBe(1);
  });

});

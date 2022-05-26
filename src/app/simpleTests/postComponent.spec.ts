import { PostComponent } from './postComponent';

describe('Post Component', ()=>{
  it('Should increase likes',()=>{
      let component = new PostComponent();

      component.like()
      expect(component.totalLikes).toBe(1);
  });

  it('Should decrease likes',()=>{
    let component = new PostComponent();

    component.dislike()
      expect(component.totalLikes).toBe(-1);
  });
});

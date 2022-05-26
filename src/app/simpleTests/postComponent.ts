export class PostComponent{
  totalLikes!: number;

  public like(){
    this.totalLikes++;
  }

  public dislike(){
    if(this.totalLikes){
      this.totalLikes--;
    }
  }
}

class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.pimage = loadImage("sprites/smoke.png");
    this.arr1=[]
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    super.display();
    if(this.body.speed>10 || this.body.position.x>200){
      var position = [this.body.position.x,this.body.position.y]
    this.arr1.push(position);
    }
    for(var i=0;i<this.arr1.length;i++){
      image(this.pimage,this.arr1[i][0],this.arr1[i][1])
    }
    console.log(this.body.speed);
  }
}

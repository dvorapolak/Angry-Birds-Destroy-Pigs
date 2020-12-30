class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
    this.visibilaty = 255

  }

  display(){
    if(this.body.speed <3) {
      super.display();
    }

    else{
      World.remove(world,this.body)
      push();
      tint(255, this.visibilaty)
      image(this.image, this.body.position.x, this.body.position.y,50,50)
      this.visibilaty = this.visibilaty-5;
      pop();
    }

  }

};
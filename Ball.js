class Ball {
  constructor(x,y){
    var options = {
      restitution : 0.8,
      friction : 0.5,
      density : 0.5
    }
    this.body = Bodies.circle(x,y,7, options);

    this.r = 7;
    World.add(world, this.body);

    

    
    
  }

  display() {
    
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(this.body.angle);
    ellipseMode(RADIUS);
    ellipse( 0, 0, 7, 7);
    pop();


  }
}

class bob {
    constructor(x, y, width, height, ) {
      var options = {
        isStatic: true,
          'restitution':0.3,
          'friction':0.5,
          'density':1.2
      }
      this.body =  Matter.Bodies.circle(x, y, 20, options);
      this.radius =20
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      ellipseMode(CENTER);
      strokeWeight(4);
      stroke("pink");
      fill("pink");
      circle(0, 0, this.radius);
      pop();
    }
  };
  
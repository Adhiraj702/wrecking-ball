class Line {
    constructor(bodyA, pointB) {
      var options = {
        bodyA: bodyA,
        pointB: pointB,
        stiffness: 1.2,
        length: 250,
      };
  
      this.pointB = pointB;
      this.line = Constraint.create(options);
      World.add(world, this.line);
    }
    attach(body) {
      this.line.bodyA = body;
    }
  
    fly() {
      this.line.bodyA = null;
    }
  
    display() {
      if (this.line.bodyA) {
        var pointA = this.line.bodyA.position;
        var pointB = this.pointB;
        push();
  
        stroke(48, 22, 8);
        strokeWeight(3);
  
        line(pointB.x, pointB.y, pointA.x, pointA.y);
  
        pop();
      }
    }
  }
  
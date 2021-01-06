class Elastic 
{
 constructor(body1,body2)
 {
    var options =
    {
      bodyA:body1,
      bodyB:body2,
      stiffness:0.03,
      length:10
    }
    this.elastic = Constraint.create(options);
    World.add(world,this.elastic);
 }
 display()
 {
     var pointA = this.elastic.bodyA.position;
     var pointB = this.elastic.bodyB.position;
     
     push()
     strokeWeight(10)
     line(pointA.x,pointA.y,pointB.x,pointB.y)
     pop()
 }
}
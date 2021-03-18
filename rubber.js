class Rubber {
    constructor(x,y,r){
        var options ={
            restitution : 0.8,
            friction : 1.5,
          
        }
    
        this.body = Bodies.circle(x,y,70,options);
        this.r = 70
        World.add(world,this.body);
    
    }
    display(){
    var pos = this.body.position
    var angle = this.body.angle
    push() 
    translate(pos.x, pos.y)
    rotate(angle)
    ellipseMode(RADIUS);
    strokeWeight(3);
    stroke("blue");
    fill("blue");
    ellipse(0,0,this.r,this.r);
    pop()
    }
}
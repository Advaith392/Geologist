class Hammer {
    constructor(x,y){
        var options ={
            restitution : 0.8

        }
    
        this.body = Bodies.rectangle(x,y,70,20,options);
        this.width = 70
        this.height = 20
        World.add(world,this.body);
    
    }
    display(){
    var pos = this.body.position
    pos.x = mouseX;
    pos.y = mouseY;
    var angle = this.body.angle
    push() 
    translate(pos.x, pos.y)
    rotate(angle)
    rectMode(CENTER);
    fill("red");
    rect(0,0,this.width,this.height);
    pop()
    }
}
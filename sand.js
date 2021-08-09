class Sand{
    constructor(x,y,radius){


        var options={
        restitution:.1,
        density: 0.0001,
        friction:.1        
        
            }
        
        this.body = Bodies.circle(x,y,radius,options)
        World.add(world,this.body);
        this.radius = radius
        
        }
            display(){
        push ()
        translate (this.body.position.x,this.body.position.y)
        rotate (this.body.angle)
        fill ("orange")
        rectMode(CENTER)
        circle(0,0,this.radius)
        pop ()
            }
        }


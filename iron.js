class Iron{
    constructor(x,y,width,height){


        var options={
        restitution:.3,
        density: 200,
        friction:.9        
        
            }
        
        this.body = Bodies.rectangle(x,y,width,height,options)
        World.add(world,this.body);
        this.width=width;
        this.height=height
        
        }
            display(){
        push ()
        translate (this.body.position.x,this.body.position.y)
        rotate (this.body.angle)
        fill ("red")
        rectMode(CENTER)
        rect(0,0,this.width,this.height)
        pop ()
            }
        }


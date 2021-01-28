class Polygon{
    constructor(x,y,width,height){
        var options = {
            restitution : 1,
            density : 1,
            friction : 1
        }

        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        this.image = loadImage("polygon.png");
        World.add(world,this.body);
    }

    display(){
        var angle = this.body.angle;
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,30,30);
        pop();
    }
}

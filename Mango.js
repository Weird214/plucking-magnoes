class Mango{
    constructor(x, y){
        var options={
            isStatic: true,
            restitution: 1,
            friction: 1
        }
        this.image = loadImage("sprites/mango.png");
        this.body = Bodies.ellipse(x,y,30, 30, options);
        World.add(world, this.body);
    }
}
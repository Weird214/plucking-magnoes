class Stone{
    constructor(x, y){
        var options={
            isStatic: false,
            rsetitution: 0,
            friction: 1,
            desnity: 0.2
        }
        this.image = loadImage("sprites/stone.png")
        this.body = Bodies.rectangle(x,y, 15, 20, options);
        World.add(world, this.body);
    }
}
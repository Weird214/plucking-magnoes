class Tree{
    constructor(x,y,width, height){
        this.image = loadImage("sprites/tree.png");
        this.body = Bodies.rectangle(x,y,width,height);
        World.add(world, this.body);
    }

}
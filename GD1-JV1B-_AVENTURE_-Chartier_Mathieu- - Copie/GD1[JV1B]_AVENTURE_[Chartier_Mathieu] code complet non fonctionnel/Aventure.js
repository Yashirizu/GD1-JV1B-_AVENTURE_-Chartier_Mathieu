class scorpion extends Phaser.GameObject.Image{
    constructor( scene, x, y, motion,direction, distance) {
        super(scene,x,y,'scorpion2',direction.offset);

        this.startX= x;
        this.startY= y;
        this.distance= distance;

        this.motion=motion;
        this.animscorpion=animscorpion[motion];
        this.direction= direction[direction];
        this.speed=0,15;
        this.f = this.animscorpion.startFrame;

        this.depth= y + 64;

    }
}
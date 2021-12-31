import p5 from "p5";

export default class Snowflake{

    private _p: p5;

    public pos: p5.Vector;
    public vel: p5.Vector;
    public acc: p5.Vector;
    public r: number;
    public mass: number;

    constructor(p:p5, _x?:number, _y?:number){
        this._p = p

        let x = _x || this._p.random(this._p.width)
        let y = _y || this._p.random(-100, -10)

        this.pos = this._p.createVector(x,y) 
        this.vel = this._p.createVector(0, 0) 
        this.acc = this._p.createVector()

        this.r = this.getRandomSize();
        this.mass = this._p.sqrt(this.r)
    }
    randomize():void{
        let x = this._p.random(this._p.width)
        let y = -50

        this.pos = this._p.createVector(x,y) 
        this.vel = this._p.createVector(0, 0) 
        this.acc = this._p.createVector()

        this.r = this.getRandomSize();
        this.mass = this._p.sqrt(this.r)
    }
    update(){
        this.vel.add(this.acc)

        this.vel.limit(this.r * 0.2);
        if (this.vel.mag() < 1) {
            this.vel.normalize()
        }
        
        this.pos.add(this.vel)
        this.acc.set(0,0)

        if (this.offScreen()) {
            this.randomize()
        }
    }
    applyForce(force: p5.Vector):void{
        const f = p5.Vector.div(force, this.mass)
        this.acc.add(f)
    }
    render():void{
        this._p.stroke(255);
        this._p.strokeWeight(this.r);
        this._p.point(this.pos.x, this.pos.y);
    }
    offScreen():boolean{
        return this.pos.y > (this._p.height + this.r)
    }
    getRandomSize(){

        let r = this._p.pow(this._p.random(0.1, 1), 5)
        return r * 8

        // let r = this._p.randomGaussian(0,2.5);
        // return this._p.constrain(this._p.abs(r*r), 1, 36)
    }
}
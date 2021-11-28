import p5 from "p5";
import Snowflake from "./Snowflake";

export default function SnowFall(p:p5){

    let snow:Snowflake[] = [];
    let gravity: p5.Vector;

    p.setup = ()=>{
        p.createCanvas(p.windowWidth, p.windowHeight);
        gravity = p.createVector(0, 0.01);
        for (let i = 0; i < 500; i++) {
            let x = p.random(p.width)
            let y = p.random(p.height)
            snow.push(new Snowflake(p,x,y))
        }
    }
    p.draw = ()=>{
        p.background(0);
        
        for (const flake of snow) {
            flake.applyForce(gravity);
            flake.update();
            flake.render();
        }
    }

}
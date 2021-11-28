import p5 from 'p5'
import './style.css'
import snowfall from './core/Snowfall'
window.onload = ()=>{
  new p5(snowfall)
}
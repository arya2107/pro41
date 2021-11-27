const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var thunder1,thunder2,thunder3,thunder4,thunder
var drops=[]
var maxDrops=100
var engine, world;


function preload(){

}

function setup(){
   engine=Engine.create()
   world=engine.world
   createCanvas(400,700)
   if(frameCount%150===0){
    for(var i=0;i<maxDrops;i++){
    drops.push(new Drop(random(0,400),random(0,400)))
    }
   }

   
    
}

function draw(){
Engine.update(engine)
background(0)
for(var i=0;i<drops.length;i++){
drops[i].display()
drops[i].update()
}
    
}   


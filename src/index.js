 import Paddle from '.src/paddle.js '
 import InputHandler from '.src/input.js'
 let canvas=document.getElementByID("gamescreen");
 let ctx=canvas.getContext("2d");

 const Game_width=800;
 const Game_height=600;
 ctx.clearRec(0,0,800,600);

 ctx.fillStyle="#f00";
 ctx.fillRect(20,20,100,100);

 ctx.fillStyle="#00f";
 ctx.fillRect(80,80,500,500);

let paddle=new Paddle(Game_width,Game_height);
paddle.draw(ctx);

new InputHandler();
let lastTime=0;
function gameLoop()
{
  let deltaTime=timeStamp-lastTime;
  lastTime=timeStamp;

  ctx.clearRec(0,0,800,600);
  paddle.update(deltaTime);
  paddle.draw(ctx);

  requestAnimationFrame(gameLoop);
}

gameLoop();

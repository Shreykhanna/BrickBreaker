export default class Paddle{

  constructor(gamewidth,gameheight)
    {
      this.gameWidth=gamewidth;
      this.width=150;
      this.height=20;

      this.maxspeed=10;
      this.speed=0;

      this.position{
        x:gamewidth/2-this.width/2,
        y:gameheight-this.height-10
       };
    }
    moveLeft()
    {
        this.speed=-this.maxspeed;
    }
    moveRight(){
      this.speed=this.maxspeed;
    }
    stop(){
      this.speed=0;  
    }
    draw(ctx)
    {
        cts.fillStyle="#0ff";
        ctx.fillRect(this.position.x,this.positon.y,this.width,this.height);
    }
    update(deltaTime)
    {
      if(!deltaTime) return;
      this.positon.x+=this.speed;

      if(this.positon.x<0) this.position.x=0;

      if(this.position.x+this.width>gameWidth)
      this.position.x=this.gameWidth-this.width;
    }

  }

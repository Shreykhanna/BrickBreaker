export default class InputHandler{

  constructor(paddle)
  {
    document.addEventListener("keydown", event =>{
      switch(event.keycode)
      {
        case 37:
        alert("Left key pressed");
        paddle.moveLeft()

        case 39:
        alert("Right key pressed");
        paddle.moveRight();
      }
    });
}
    document.addEventListener("keyup", event =>{
     switch(event.keycode)
    {
       case 37:
       alert("Left key pressed");
       paddle.stop();
       break;
       case 39:
       alert("Right key pressed");
       paddle.stop();
       break;
      }
  });
}

}

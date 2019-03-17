// создание человека, размещение на сцене
var Human = function(id,left,top) {
    var step = 32;
    this.id = id;
    this.left = left;
    this.top = top;
    
    var me = this;
  
    this.randomStep = function(){
      var randDirection = Math.floor(Math.random()*4);
      switch(randDirection){
        case 0:
          me.goRight();
          break;  
        case 1:
          me.goLeft();
          break;  
        case 2:
          me.goUp();
          break;  
        case 3:
          me.goDown();
          break;
      }                          

    }

  this.draw = function() {
      $(this.id).css({
      "top": me.top * step + "px",
      "left": me.left * step + "px",
    })
    }

    var nextStep = 0;

    this.makeStep = function(){
      nextStep = (nextStep + 1) % 4;
      this.x = nextStep * 32;       
    }

    var directions ={
      top: -192,
      down: 0,
      right: -96,
      left: -48
    };
    
    var direction = 'down';

    this.goLeft=function(){
      direction = 'left';

      this.makeStep();
      if(this.left>0){
        this.left -= 1;
      }
    }
  
    this.goRight=function(){
      this.makeStep();
      direction = 'right';
      if(this.left<stage.w-1){
        this.left += 1;
      }
    }

    this.goDown=function(){
      this.makeStep();
      direction = 'down';
      if(this.top<stage.h-1){
        this.top += 1;
      } 
    }

    this.goUp=function(){
      this.makeStep();
      direction = 'top';
      if(this.top>0){
        this.top -= 1;
      } 
    }
    var me = this;

  
  this.draw = function() {
      $(me.id).css({
       "top": me.top * step + "px",
       "left": me.left * step + "px",
       "zIndex": me.top,
       'backgroundPosition': me.x + 'px ' + directions[direction] + 'px'
    })
  }
} 




var createHuman = function (gameObj,game, stage) {
  var objEl = document.createElement('div');
  var step = 32;
  objEl.setAttribute("class", "human");
  objEl.setAttribute("id", "human_1");
  objEl.style.top = gameObj.y * step + 'px';
  objEl.style.left = gameObj.x * step + 'px';
  objEl.style.width = gameObj.w * step + 'px';
  objEl.style.height = gameObj.h * step + 'px';
  stage.append(objEl);
  return new Human ("#human_1",gameObj.x, gameObj.y);

}




export {
  createHuman  
}
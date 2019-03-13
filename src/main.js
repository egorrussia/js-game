import Game from './models/game'
import {
  createHouse,
  createPortal
} from './models/buildings'

$(function() {

  var gameMap = {
    // bg
    houses: [{
      w: 3,
      h: 3,
      img: 'img/house.png',
      x: 5,
      y: 4
    }, {
      w: 3,
      h: 3,
      img: 'img/house.png',
      x: 4,
      y: 3
    }, {
      w: 4,
      h: 4,
      img: 'img/house.png',
      x: 20,
      y: 10
    }]
  }

  var stageEl = document.getElementById('stage');
  gameMap['houses'].forEach(function(el) {
    createHouse(el, game, stageEl);
  });

	var stage = {
		w: 12*3,
		h: 6*3
	}

  var step = 32;
	var Apple = function(id,left,top) {
		  this.id = id;
      this.left = left;
	  	this.top = top;
	  	
	  	var me = this;
	  
	  	this.randomReplace = function(){
	  		this.left = Math.floor(Math.random()*stage.w);
	  		this.top = Math.floor(Math.random()*stage.h);
	  	}

		this.draw = function() {
		  	$(this.id).css({
			  "top": me.top * step + "px",
				"left": me.left * step + "px",
			})
	  	}

	}	

  var Cactus = function(left,top) {
      this.left = left;
      this.top = top;
      
      var me = this;
    
      this.randomReplace = function(){
        this.left = Math.floor(Math.random()*stage.w);
        this.top = Math.floor(Math.random()*stage.h);
      }

    this.draw = function() {
        $('#cactus').css({
        "top": me.top * step + "px",
        "left": me.left * step + "px",
      })
      }

  }

  var Wolf = function(left, top) {
	this.left = left;
  	this.top = top;

    this.x = 0;
    this.y = 0;
    var nextStep = 0;

    this.makeStep = function(){
      nextStep = (nextStep + 1) % 4;
      this.x = nextStep * 96;       
    }

    var directions ={
      top: -288,
      down: 0,
      right: -192,
      left: -96
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

    this.flame = function(){
      var flameBall = $('<div class="flame"></div>');
      var flameTop = me.top*step,
      flameLeft = me.left*step,
      startDirection = direction;
      flameBall.css({
        "top": flameTop + "px",
        "left": flameLeft + "px",         
       })

      console.log(me.top);      
      var intervalID = setInterval(function(){
        switch(startDirection){
          case 'left':
            flameLeft-=100;
          break;  
          case 'right':
            flameLeft+=100;
          break;
          case 'top':
            flameTop-=100;
          break;
          case 'down':
            flameTop+=100;
          break;                          
        }

        flameBall.css({
          "top": flameTop + "px",
          "left": flameLeft + "px",         
        })
      },100);

      setTimeout(function(){
        clearInterval(intervalID);
        flameBall.remove();
      },3000);

      

      $('#stage').append(flameBall);
    }




  	var me = this;

  
	this.draw = function() {
	  	$('#wolf').css({
		    "top": me.top * step + "px",
			 "left": me.left * step + "px",
       "zIndex": me.top,
       'backgroundPosition': me.x + 'px ' + directions[direction] + 'px'
		})
  	}
};

var game = new Game();
var wolf = new Wolf(0, 0);
var apple1 = new Apple("#apple1",1, 2);
var apple2 = new Apple("#apple2",1, 2);
var cactus = new Cactus(2, 2);
cactus.randomReplace();
apple1.randomReplace();
apple2.randomReplace();

$(document).keydown(function(e) {
  console.log(e);
  
  switch (e.keyCode){
  	case 40:
  		 wolf.goDown();
  		 break;
  	case 38:
  		 wolf.goUp();
  		 break;
  	case 39:
  		 wolf.goRight();
  		 break;  
  	case 37:
  		 wolf.goLeft();
  		 break;
    case 32:
       wolf.flame();
       break;            		   		   		 
  } 
})



function proc() {
	if(apple1.left == wolf.left && apple1.top == wolf.top){
		apple1.randomReplace();
    cactus.randomReplace();
    game.score += 1;
		//console.log("check");
	}
  if(apple2.left == wolf.left && apple2.top == wolf.top){
    apple2.randomReplace();
    cactus.randomReplace();
    game.score += 1;
    //console.log("check");
  }
  if(cactus.left == wolf.left && cactus.top == wolf.top){
    game.stop();
  }
  if(game.timer < 1){
    game.stop();
  }
}

function draw() {
	wolf.draw();
	apple1.draw();
  apple2.draw();
  game.draw($);
  cactus.draw();
}

setInterval(function() {
  if(!game.active){
    return false;
  };  
  proc();
	draw();
}, 100);

setInterval(function() {
  //game.timer -= 1;
}, 1000);

 $("#game .play").click(
  function(){
    game.start();

  });


});
$(function() {

	var stage = {
		w: 12,
		h: 6
	}


  var Game = function() {
    this.timer = 10;
    this.score = 0;
    this.active = true;
    
    this.stop = function() {

      this.active = false;

    }

    this.start = function() {

      this.active = true;
      this.timer = 10;
      this.score = 0;

    }

    this.draw = function() {
      $('#game .score').html(
        this.score
      )
      $('#game .timer').html(
        this.timer
      )
      if(!this.active){
        $("#game .play").css("display","inline");
      }else{
        $("#game .play").css("display","none");
      }
    }


  }

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
			  "top": me.top * 100 + "px",
				"left": me.left * 100 + "px",
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
        "top": me.top * 100 + "px",
        "left": me.left * 100 + "px",
      })
      }

  }

  var Wolf = function(left, top) {
	this.left = left;
  	this.top = top;

  	this.goLeft=function(){
  		if(this.left>0){
  			this.left -= 1;
  		}
  	}
  
    this.goRight=function(){
  		if(this.left<stage.w-1){
  			this.left += 1;
  		}	
  	}

  	this.goDown=function(){
  		if(this.top<stage.h-1){
  			this.top += 1;
  		}	
  	}

  	this.goUp=function(){
  		if(this.top>0){
  			this.top -= 1;
  		}	
  	}

  	var me = this;
  
	this.draw = function() {
	  	$('#wolf').css({
		    "top": me.top * 100 + "px",
			 "left": me.left * 100 + "px",
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
  game.draw();
  cactus.draw();
}

setInterval(function() {
  if(!game.active){
    return false;
  };  
  proc();
	draw();
}, 30);

setInterval(function() {
  game.timer -= 1;
}, 1000);

 $("#game .play").click(
  function(){
    game.start();

  });


});
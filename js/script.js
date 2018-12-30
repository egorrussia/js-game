$(function() {

	var stage = {
		w: 12,
		h: 6
	}

	var Apple = function(left,top) {
		this.left = left;
	  	this.top = top;
	  	
	  	var me = this;
	  
	  	this.randomReplace = function(){
	  		this.left = Math.floor(Math.random()*stage.w);
	  		this.top = Math.floor(Math.random()*stage.h);
	  	}

		this.draw = function() {
		  	$('#apple').css({
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

var wolf = new Wolf(0, 0);
var apple = new Apple(1, 2);

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
	if(apple.left == wolf.left && apple.top == wolf.top){
		apple.randomReplace();
		//console.log("check");
	}
}

function draw() {
	wolf.draw();
	apple.draw();
}

setInterval(function() {
  proc();
	draw();
}, 30);

});
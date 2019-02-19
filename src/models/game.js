  class Game {

    constructor(){
      this.timer = 10;
      this.score = 0;
      this.active = true;
    }
    
    stop() {

      this.active = false;

    }

    start() {

      this.active = true;
      this.timer = 10;
      this.score = 0;

    }

    draw($) {
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

  export default Game
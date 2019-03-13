// создание дива, размещение на сцене
function createHouse (gameObj, game, stage) {
  var objEl = document.createElement('div');
  var step = 32; // @todo: брать из game
  objEl.setAttribute("class", "house");
  objEl.style.backgroundImage = 'url(' + gameObj.img + ')';
  objEl.style.height = gameObj.h * step + 'px';
  objEl.style.width = gameObj.w * step + 'px';
  objEl.style.top = gameObj.y * step + 'px';
  objEl.style.left = gameObj.x * step + 'px';
  objEl.style.zIndex = gameObj.y;
  stage.append(objEl);
}

function createPortal() {
  
}

export {
  createHouse,
  createPortal
}
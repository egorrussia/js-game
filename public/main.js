/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _game = __webpack_require__(/*! ./models/game */ \"./src/models/game.js\");\n\nvar _game2 = _interopRequireDefault(_game);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n$(function () {\n\n  var stage = {\n    w: 12,\n    h: 6\n  };\n\n  var Apple = function Apple(id, left, top) {\n    this.id = id;\n    this.left = left;\n    this.top = top;\n\n    var me = this;\n\n    this.randomReplace = function () {\n      this.left = Math.floor(Math.random() * stage.w);\n      this.top = Math.floor(Math.random() * stage.h);\n    };\n\n    this.draw = function () {\n      $(this.id).css({\n        \"top\": me.top * 100 + \"px\",\n        \"left\": me.left * 100 + \"px\"\n      });\n    };\n  };\n\n  var Cactus = function Cactus(left, top) {\n    this.left = left;\n    this.top = top;\n\n    var me = this;\n\n    this.randomReplace = function () {\n      this.left = Math.floor(Math.random() * stage.w);\n      this.top = Math.floor(Math.random() * stage.h);\n    };\n\n    this.draw = function () {\n      $('#cactus').css({\n        \"top\": me.top * 100 + \"px\",\n        \"left\": me.left * 100 + \"px\"\n      });\n    };\n  };\n\n  var Wolf = function Wolf(left, top) {\n    this.left = left;\n    this.top = top;\n\n    this.goLeft = function () {\n      if (this.left > 0) {\n        this.left -= 1;\n      }\n    };\n\n    this.goRight = function () {\n      if (this.left < stage.w - 1) {\n        this.left += 1;\n      }\n    };\n\n    this.goDown = function () {\n      if (this.top < stage.h - 1) {\n        this.top += 1;\n      }\n    };\n\n    this.goUp = function () {\n      if (this.top > 0) {\n        this.top -= 1;\n      }\n    };\n\n    var me = this;\n\n    this.draw = function () {\n      $('#wolf').css({\n        \"top\": me.top * 100 + \"px\",\n        \"left\": me.left * 100 + \"px\"\n      });\n    };\n  };\n\n  var game = new _game2.default();\n  var wolf = new Wolf(0, 0);\n  var apple1 = new Apple(\"#apple1\", 1, 2);\n  var apple2 = new Apple(\"#apple2\", 1, 2);\n  var cactus = new Cactus(2, 2);\n  cactus.randomReplace();\n  apple1.randomReplace();\n  apple2.randomReplace();\n\n  $(document).keydown(function (e) {\n    console.log(e);\n\n    switch (e.keyCode) {\n      case 40:\n        wolf.goDown();\n        break;\n      case 38:\n        wolf.goUp();\n        break;\n      case 39:\n        wolf.goRight();\n        break;\n      case 37:\n        wolf.goLeft();\n        break;\n    }\n  });\n\n  function proc() {\n    if (apple1.left == wolf.left && apple1.top == wolf.top) {\n      apple1.randomReplace();\n      cactus.randomReplace();\n      game.score += 1;\n      //console.log(\"check\");\n    }\n    if (apple2.left == wolf.left && apple2.top == wolf.top) {\n      apple2.randomReplace();\n      cactus.randomReplace();\n      game.score += 1;\n      //console.log(\"check\");\n    }\n    if (cactus.left == wolf.left && cactus.top == wolf.top) {\n      game.stop();\n    }\n    if (game.timer < 1) {\n      game.stop();\n    }\n  }\n\n  function draw() {\n    wolf.draw();\n    apple1.draw();\n    apple2.draw();\n    game.draw();\n    cactus.draw();\n  }\n\n  setInterval(function () {\n    if (!game.active) {\n      return false;\n    };\n    proc();\n    draw();\n  }, 30);\n\n  setInterval(function () {\n    game.timer -= 1;\n  }, 1000);\n\n  $(\"#game .play\").click(function () {\n    game.start();\n  });\n});\n\n//# sourceURL=webpack:///./src/main.js?");

/***/ }),

/***/ "./src/models/game.js":
/*!****************************!*\
  !*** ./src/models/game.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar Game = function Game() {\n  this.timer = 10;\n  this.score = 0;\n  this.active = true;\n\n  this.stop = function () {\n\n    this.active = false;\n  };\n\n  this.start = function () {\n\n    this.active = true;\n    this.timer = 10;\n    this.score = 0;\n  };\n\n  this.draw = function () {\n    $('#game .score').html(this.score);\n    $('#game .timer').html(this.timer);\n    if (!this.active) {\n      $(\"#game .play\").css(\"display\", \"inline\");\n    } else {\n      $(\"#game .play\").css(\"display\", \"none\");\n    }\n  };\n};\n\nexports.default = Game;\n\n//# sourceURL=webpack:///./src/models/game.js?");

/***/ })

/******/ });
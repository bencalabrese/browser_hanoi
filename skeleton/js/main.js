var HanoiView = require("./HanoiView.js");
var HanoiGame = require("../../hanoi-core-solution/game.js");

$(function () {
  var rootEl = $('.hanoi');
  var game = new HanoiGame();
  new HanoiView(game,rootEl);
});

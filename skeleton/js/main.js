var HanoiView = require("./HanoiView.js");
var HanoiGame = require("../../hanoi-core-solution/game.js");

$(function () {
  var $rootEl = $('.hanoi');
  var game = new HanoiGame();
  var view = new HanoiView(game,$rootEl);

  view.setupTowers();
  view.render();
  view.bindEvents();
});

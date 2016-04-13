function HanoiView(game, $rootEl) {
  this.game = game;
  this.$rootEl = $rootEl;
}

HanoiView.prototype.setupTowers = function () {
  for(var i = 0; i < 3; i++) {
    var $tower = $("<ul></ul>");

    for(var j = 1; j < 4; j++) {
      var $disk = $("<li></li>");
      if (i === 0) {
        $disk.addClass("disk-" + j);
      }
      $tower.append($disk);
    }

    $tower.attr("id", i);
    this.$rootEl.append($tower);
  }
};

module.exports = HanoiView;

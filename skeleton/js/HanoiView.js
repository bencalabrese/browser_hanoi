function HanoiView(game, $rootEl) {
  this.game = game;
  this.$rootEl = $rootEl;
  this.$startTower = null;
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

HanoiView.prototype.bindEvents = function () {
  var self = this;
  $("ul").on("click", function(event) {
    if (self.$startTower === null) {
      self.$startTower = $(event.currentTarget);
      self.$startTower.addClass("selected");
    } else {
      var $endTower = $(event.currentTarget);

      var startTowerIdx = parseInt(self.$startTower.attr("id"));
      var endTowerIdx = parseInt($endTower.attr("id"));

      self.game.move(startTowerIdx, endTowerIdx);
      self.$startTower.removeClass("selected");
      self.$startTower = null;

      self.game.print();
    }
  });
};



module.exports = HanoiView;

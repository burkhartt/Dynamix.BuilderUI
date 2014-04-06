var Canvas,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

Canvas = (function(_super) {
  __extends(Canvas, _super);

  Canvas.prototype.buttons = [];

  function Canvas(htmlElement) {
    this.buttons.push(new NewButton());
    this.htmlElement = htmlElement;
  }

  Canvas.prototype.render = function() {
    return Canvas.__super__.render.apply(this, arguments);
  };

  return Canvas;

})(UIComponent);

//# sourceMappingURL=canvas.js.map

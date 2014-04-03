var Button, NewButton,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

Button = (function() {
  function Button() {}

  Button.prototype.render = function() {};

  return Button;

})();

NewButton = (function(_super) {
  __extends(NewButton, _super);

  function NewButton() {
    return NewButton.__super__.constructor.apply(this, arguments);
  }

  NewButton.prototype.onClick = function() {
    return alert("HI");
  };

  NewButton.prototype.render = function() {
    return alert("HI");
  };

  return NewButton;

})(Button);

//# sourceMappingURL=buttons.js.map

var NewButton,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

NewButton = (function(_super) {
  __extends(NewButton, _super);

  function NewButton() {
    return NewButton.__super__.constructor.apply(this, arguments);
  }

  NewButton.prototype.onClick = function() {
    return alert("HI");
  };

  return NewButton;

})(UIComponent);

//# sourceMappingURL=newbutton.js.map

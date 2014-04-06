var UIComponent;

UIComponent = (function() {
  function UIComponent() {}

  UIComponent.prototype.htmlElement = null;

  UIComponent.prototype.render = function() {
    return this.htmlElement.html(Templates[this.constructor.name]());
  };

  return UIComponent;

})();

//# sourceMappingURL=_uicomponent.js.map

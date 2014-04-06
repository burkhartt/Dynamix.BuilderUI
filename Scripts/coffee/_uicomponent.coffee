class UIComponent
  htmlElement: null
  render: () ->
    this.htmlElement.html(Templates[@constructor.name]())

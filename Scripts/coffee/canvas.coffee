class Canvas extends UIComponent
  buttons: []
  constructor: (htmlElement) ->
    this.buttons.push(new NewButton())
    this.htmlElement = htmlElement

  render: () ->
    super
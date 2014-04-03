class Button
  render:() ->

class NewButton extends Button 
  onClick: () ->
    alert("HI")

  render: () ->
    alert("HI")
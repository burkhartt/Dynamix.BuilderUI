class ClassSchema
  name: ""
  attributes: []

  constructor: ->
    this.name = "Untitled"
    
  add_attribute: (name) ->
    this.attributes.push(name)

  set_name: (name) ->
    this.name = name

  compile: ->
    JSON.stringify(this)
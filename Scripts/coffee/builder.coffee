class ClassSchema
  name: ""
  attributes: []

  constructor: ->
  	@name = "Untitled"
  	@attributes = []

  add_attribute: (name) ->
    @attributes.push(name)  

  set_name: (name) ->
    @name = name

  compile: ->
  	JSON.stringify(this)
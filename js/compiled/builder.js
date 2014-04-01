var ClassSchema;

ClassSchema = (function() {
  ClassSchema.prototype.name = "";

  ClassSchema.prototype.attributes = [];

  function ClassSchema() {
    this.name = "Untitled";
    this.attributes = [];
  }

  ClassSchema.prototype.add_attribute = function(name) {
    return this.attributes.push(name);
  };

  ClassSchema.prototype.set_name = function(name) {
    return this.name = name;
  };

  ClassSchema.prototype.compile = function() {
    return JSON.stringify(this);
  };

  return ClassSchema;

})();

//# sourceMappingURL=builder.js.map

// LibraryEntryView.js - Defines a backbone view class for the entries that will appear within the library views. These will be inserted using the "subview" pattern.
var LibraryEntryView = Backbone.View.extend({

  tagName: 'tr',

  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td>'),
  
  initialize:function(){
    this.model.on('enqueue', function(){
      this.collection.enqueue(this.model);
      this.remove();
    }, this);
  },
  events: {
    'click': function() {
      this.model.enqueue(); //trigger enqueue event
      this.model.play();
    }
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  },

  remove: function(){
    this.$el.remove();
  }



});

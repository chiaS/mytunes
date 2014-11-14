// LibraryEntryView.js - Defines a backbone view class for the entries that will appear within the library views. These will be inserted using the "subview" pattern.
var LibraryEntryView = Backbone.View.extend({

  className: 'col-xs-6 col-md-3',

 // template: _.template('<td><%= artist %></td><td><%= title %></td><td><button>Add</button></td>'),
  template: _.template('<a href="#" class="thumbnail">'+
                 '<img src="<%= art %>">'+
                 '</a><figcaption><%= title %><%= artist%></figcaption>'),
  initialize:function(){
   
  },
  events: {
    'click button': function() {
      this.model.enqueue(); //trigger enqueue event
     // this.model.play();
    }
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }


});

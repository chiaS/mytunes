// LibraryEntryView.js - Defines a backbone view class for the entries that will appear within the library views. These will be inserted using the "subview" pattern.
var LibraryEntryView = Backbone.View.extend({

  className: 'col-xs-2 col-md-2 album-view',

 // template: _.template('<td><%= artist %></td><td><%= title %></td><td><button>Add</button></td>'),
  template: _.template('<a href="#" class="thumbnail">'+
                 '<img src="<%= art %>"></a>'+
                 '<div class="caption">'+
                  '<strong><%= title %></strong>'+
                  '<p><%= artist%></p>'+
                 '</div>'),
 
  events: {
    'click a.thumbnail': function() {
      this.model.enqueue(); //trigger enqueue event
     // this.model.play();
    }
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }


});

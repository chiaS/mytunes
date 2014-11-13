// LibraryEntryView.js - Defines a backbone view class for the entries that will appear within the library views. These will be inserted using the "subview" pattern.
var LibraryEntryView = Backbone.View.extend({

  tagName: 'tr',

  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td>'),

  events: {
    'click': function() {
      // songQueue.enqueue(new SongModel( {
      //   url: "https://s3-us-west-1.amazonaws.com/hr-mytunes/data/03+Age+Ain%27t+Nothing+But+A+Number.mp3",
      //   title: "Age Ain't Nothing But A Number",
      //   artist: "Aaliyah",
      // }));
      console.log('enqueue');
      this.model.enqueue();
      this.model.play();
    }
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }

});

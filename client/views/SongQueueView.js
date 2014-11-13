// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({
  tagName:'table',

  initialize: function() {
    //this.render();
  },

  render: function() {
    this.$el.children().detach();

    this.$el.html('<TH>Playlist</TH>').append(
      this.collection.map(function(song){
        return new SongQueueEntryView({model: song}).render();
      })
    );

   // $('body').append(this.$el);
     return this.$el;
  }

});

// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({
  tagName: 'table',
  
  className: 'table table-hover',

  initialize: function() {
    this.collection.on('add remove', this.render, this);
  },

  render: function() {
    this.$el.children().detach();

    this.$el.append(
      this.collection.map(function(song){
        return new SongQueueEntryView({model: song}).render();
      })
    );
    return this.$el;
  }

});



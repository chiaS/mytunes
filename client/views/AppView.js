// AppView.js - Defines a backbone view class for the whole music app.
var AppView = Backbone.View.extend({
  className:'container-fluid',

  initialize: function(params){
    this.playerView = new PlayerView({model: this.model.get('currentSong')});
    $('.player').append(this.playerView.el);
 
    this.libraryView = new LibraryView({collection: this.model.get('library')});

    this.playListView = new SongQueueView({collection: this.model.get('songQueue')});
    $('.playlist').append(this.playListView.render());
    
    // change:currentSong - this is Backbone's way of allowing you to filter events to
    // ONLY receive change events for the specific property, 'currentSong'
   
    this.model.on('change:currentSong', function(model){
      this.playerView.setSong(model.get('currentSong'));
    }, this);

  },

  render: function(){
    return this.$el.html([
      this.libraryView.$el
   //   this.playerView.$el,
    ]);
  }

});

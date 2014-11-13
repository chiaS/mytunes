// AppView.js - Defines a backbone view class for the whole music app.
var AppView = Backbone.View.extend({

  initialize: function(params){
    this.playerView = new PlayerView({model: this.model.get('currentSong')});
    $('body').append(this.playerView.$el);
    
    this.playlist = new SongQueue();//collection
    this.playListView = new SongQueueView({collection: this.playlist});
    $('.playlist').append(this.playListView.render());
 
    this.libraryView = new LibraryView({
                   collection: this.model.get('library'),
                   options: this.playlist});

    // change:currentSong - this is Backbone's way of allowing you to filter events to
    // ONLY receive change events for the specific property, 'currentSong'
   
    this.model.on('change:currentSong', function(model){
      this.playerView.setSong(model.get('currentSong'));
    }, this);

  },

  render: function(){
    return this.$el.html([
  //    this.playerView.$el,
      this.libraryView.$el
    ]);
  }

});

// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({
  model: SongModel,

  initialize: function(){
    this.on('change', this.enqueue, this);
  },

  enqueue: function(data) {
      this.add(data);
  },

  dequeue: function(data){
    this.remove(data);
  },

  playFirst: function(){
  },

  play: function(song){


  },
  ended: function(){}

});

// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  enqueue: function(data) {
    this.add(data);
    if(this.length === 1)
      this.playFirst();
  },

  dequeue: function(data){
    this.remove(data);
    if(this.length>0)
      this.playFirst();
  },

  playFirst: function(){
    this.at(0).play();
  },

  ended: function(song){
    song.dequeue();
  },

  parse: function(response){
    return response.results;
  }

});

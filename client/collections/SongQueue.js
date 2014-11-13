// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({
  initialize:function(){
  
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
  ended: function(){

  },

  parse: function(response){
    return response.results;
  }

});

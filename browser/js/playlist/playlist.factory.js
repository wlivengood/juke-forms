juke.factory('PlaylistFactory', function ($http, SongFactory) {

  var cachedPlaylists = [];

  var PlaylistFactory = {};

  PlaylistFactory.fetchAll = function () {
    return $http.get('/api/playlists')
    .then(function (response) {
      angular.copy(response.data, cachedPlaylists);
      return cachedPlaylists;
    });
  };

  PlaylistFactory.create = function (data) {
    return $http.post('/api/playlists', data)
    .then(function (response) {
      var playlist = response.data
      cachedPlaylists.push(playlist);
      return playlist;
    });
  };

  PlaylistFactory.fetchById = function(id) {
    return $http.get('/api/playlists/' + id)
    .then(function(response) {
      return response.data;
    })
    .then(function(playlist) {
      playlist.songs = playlist.songs.map(SongFactory.convert);
      return playlist;
    });
  };

  PlaylistFactory.addSong = function(song, playlist) {
    return $http.post('/api/playlists/' + playlist.id + '/songs', {song: song})
    .then(function(song) {
      return song;
    })
  }

  return PlaylistFactory;

});
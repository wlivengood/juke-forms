juke.factory('PlaylistFactory', function($http) {
	var PlaylistFactory = {}

	PlaylistFactory.create = function(playlist) {
		return $http.post('/api/playlists', playlist)
		.then(function(createdPlaylist) {
			return createdPlaylist.data;
		});
	}

	return PlaylistFactory;
});
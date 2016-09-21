juke.config(function($stateProvider) {
	$stateProvider.state('playlist', {
		url: '/playlists/new',
		templateUrl: '/js/playlist/playlist.html',
		controller: 'PlaylistCtrl'
	});
});

juke.config(function($stateProvider) {
	$stateProvider.state('singlePlaylist', {
		url: '/playlists/:id',
		templateUrl: '/js/playlist/singlePlaylist.html',
		controller: 'singlePlaylistCtrl',
		resolve: {
			thePlaylist: function($stateParams, PlaylistFactory) {
				return PlaylistFactory.fetchById($stateParams.id)
			}
		}
	});
});
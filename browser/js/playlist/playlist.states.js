juke.config(function($stateProvider) {
	$stateProvider.state('playlist', {
		url: '/playlists/new',
		templateUrl: '/js/playlist/playlist.html',
		controller: 'PlaylistCtrl'
	});
});
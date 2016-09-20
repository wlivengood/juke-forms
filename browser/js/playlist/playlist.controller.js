juke.controller('PlaylistCtrl', function($scope, PlaylistFactory) {
	$scope.playlist = {}
	$scope.makePlaylist = function() {
		$scope.playlist.name = $scope.playlistName;
		$scope.playlistName = "";
		return PlaylistFactory.create($scope.playlist)
		.then(function(createdPlaylist) {
			console.log(createdPlaylist);
		});
	};
});

juke.controller('PlaylistsCtrl', function($scope, PlaylistFactory) {
	PlaylistFactory.fetchAll()
	.then(function(playlists) {
		$scope.playlists = playlists;
	});
});
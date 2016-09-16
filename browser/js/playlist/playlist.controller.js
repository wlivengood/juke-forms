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
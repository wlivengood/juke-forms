juke.controller('PlaylistCtrl', function($scope, PlaylistFactory, $state) {
	$scope.playlist = {}
	$scope.makePlaylist = function() {
		var newPlaylist;
		$scope.playlist.name = $scope.playlistName;
		$scope.playlistName = "";
		return PlaylistFactory.create($scope.playlist)
		.then(function(createdPlaylist) {
			newPlaylist = createdPlaylist;
			console.log(createdPlaylist);
		})
		.then(function() {
			$state.go('singlePlaylist', {id: newPlaylist.id});
		});
	};
});

juke.controller('PlaylistsCtrl', function($scope, PlaylistFactory) {
	PlaylistFactory.fetchAll()
	.then(function(playlists) {
		$scope.playlists = playlists;
	});
});

juke.controller('singlePlaylistCtrl', function($scope, PlayerFactory, thePlaylist, SongFactory, PlaylistFactory) {
	$scope.playlist = thePlaylist;

	SongFactory.fetchAll()
	.then(function(songs) {
		$scope.songs = songs;
	});

	$scope.addSong = function(song, playlist) {
		return PlaylistFactory.addSong(song, playlist);
	};

	$scope.toggle = function (song) {
	  if (song !== PlayerFactory.getCurrentSong()) {
	    PlayerFactory.start(song, $scope.playlist.songs);
	  } else if ( PlayerFactory.isPlaying() ) {
	    PlayerFactory.pause();
	  } else {
	    PlayerFactory.resume();
	  }
	};

	$scope.getCurrentSong = function () {
	  return PlayerFactory.getCurrentSong();
	};

	$scope.isPlaying = function (song) {
	  return PlayerFactory.isPlaying() && PlayerFactory.getCurrentSong() === song;
	};
})
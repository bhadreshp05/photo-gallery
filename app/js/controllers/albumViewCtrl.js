
photoApp.controller('albumViewCtrl', function($scope, $routeParams, albumProvider){

	$scope.load_error_text = "";
	$scope.album_name = $routeParams.album_name;

    try {
        var album = albumProvider.getAlbumByName($scope.album_name);
        $scope.photos = album.photos;
    } catch (e) {
        $scope.load_error_text = "Couldn't find that album.";
    }
});
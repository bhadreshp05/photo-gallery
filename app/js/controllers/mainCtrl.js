
photoApp.controller('mainCtrl', function ($scope, albumProvider) {
    $scope.adding_album = {};
    $scope.addAlbumError = "";

    $scope.albums = albumProvider.getAlbums();

    $scope.addAlbum = function (new_album) {
        try {
            albumProvider.addAlbum(new_album);
            $scope.adding_album = {};
            $scope.addAlbumError = "";
        } catch (e) {
            if (e.message == "missing_name") {
                $scope.addAlbumError =  "You need to give a title";
            } else if (e.message == "missing_date") {
                $scope.addAlbumError =  "You need to give a date";
            } else if (e.message == "missing_description") {
                $scope.addAlbumError =  "You need to give a description";
            } else if (e.message == "missing_title") {
                $scope.addAlbumError =  "You need to give a title";
            } else if (e.message == "bad_date") {
                $scope.addAlbumError =  "You need to give a valid date";
            } else if (e.message == "duplicate_album_name") {
                $scope.addAlbumError =  "You need to give a diffrent album name";
            }
        }
    };
});
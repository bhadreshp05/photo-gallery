photoApp.controller('mainCtrl', ['$scope', function ($scope) {
    $scope.adding_album = {};
    $scope.addAlbumError = "";
    $scope.albums = [{ name: 'madrid309', title: 'Weekend in Madird', date: '2013-09-01', description: 'Fun weekend visiting the Capitol of Spain'},
                     { name: 'mexico2011', title: 'Weekend in Cancun', date: '2011-03-01', description: 'Fun weekend visiting the Cancun'},
                     { name: 'india2010', title: 'Holiday in India', date: '2010-12-25', description: 'Fun times back in motherland'}
                    ];


    $scope.addAlbum = function(new_album) {
        if (!new_album.title) {
            $scope.addAlbumError = 'Missing Title'
        } else if (!new_album.date || !isValidDate(new_album.date) ) {
            $scope.addAlbumError = 'Invalid Date';
        } else if (!new_album.name) {
            $scope.addAlbumError = 'Missing short name';
        } else if (!new_album.description) {
            $scope.addAlbumError = 'Missing Description';
        } else {
            $scope.albums.push(new_album);
            $scope.adding_album = {};
            $scope.addAlbumError = "";
        }
    }

    // Check for valid date. Ex. 2014/05/05, 2014-05-05, 2014-5-5, 14-5-5.
    function isValidDate (date) {
        if (date.match(/^[0-9]{2,4}[\-\/\. ,][0-9]{1,2}[\-\/\. ,][0-9]{1,2}$/)) {
            var d = new Date(date);
            return !isNaN(d.getTime());
        } else {
            return false;
        }
    }

//    function fixupPhoneNumber (phone) {
//        phone = phone.trim();
//        var out = "";
//        if (phone[0] == '+') out += '+';
//        for (var i = 0; i < phone.length; i++) {
//            if (!isNaN(parseInt(phone[i])))
//                out += phone[i];
//        }
//        return out;
//    }
}]);
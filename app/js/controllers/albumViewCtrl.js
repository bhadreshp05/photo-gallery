
photoApp.controller('albumViewCtrl', ['$scope', '$routeParams', function($scope, $routeParams){

	$scope.load_error_text = "";
	$scope.album_name = $routeParams.album_name;

	var photos = {
		"madrid309": [
			{	filename: "250x250.gif",
              	date: "2013-09-01",
                description: "Fun weekend visiting the Capitol of Spain"
            },
            { 	filename: "250x250.gif",
                date: "2013/09/05",
                description: "so much winning!!!"
            }
		],
		"mexico2011": [
			{	filename: "250x250.gif",
              	date: "2013/09/05",
                description: "I love this place"
            },
            { 	filename: "250x250.gif",
                date: "2013/09/05",
                description: "so much winning!!!"
            }
		],
		"india2010": [
			{	filename: "250x250.gif",
              	date: "2013/09/05",
                description: "I love this place"
            },
            { 	filename: "250x250.gif",
                date: "2013/09/05",
                description: "so much winning!!!"
            }
		]
	};

	if (photos[$scope.album_name]) {
		$scope.photos = photos[$scope.album_name];
	} else {
		$scope.load_error_text = "I can't find an album for that name";
	}

}]);
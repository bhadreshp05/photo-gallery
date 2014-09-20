var photoApp = angular.module('photoGallery', ['ngRoute']);


photoApp.config(['$routeProvider',function($routeProvider) {
    $routeProvider
            .when("/albums", {
                controller: "mainCtrl",
                templateUrl: "tpl/album-list-partial.html"
            })
            .when("/album/:album_name", {
                controller: "albumViewCtrl",
                templateUrl: "tpl/album-view-partial.html"
            })
            .when("/", {
                redirectTo: "/albums"
            })
            .otherwise({ redirectTo: "/albums"});
}]);

angular.module("app", [])
	.controller('appCtrl',['$scope', function ($scope) {
		$scope.submit = function (url) {
			console.log(url);
		};
	}])
var app = angular.module('loginModule', []);

var initUsername = 'admin';
var initPassword = '123456';

app.controller('loginCtrl', ($scope) => {
	$scope.loginHandler = () => {
		if ($scope.username == initUsername && $scope.password == initPassword) {
			$scope.result = 'Login Success';
		} else {
			$scope.result = 'You are not authenticated or your session expired. Please login.';
		}
	}
});
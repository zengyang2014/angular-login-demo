var app = angular.module('loginModule', []);

app.controller('loginCtrl', ($scope) => {
	$scope.loginHandler = () => {
		if ($scope.currentLocation == 'Select Location') {
			$scope.result = 'Please select an item in the list'
		} else if ($scope.username != 'admin' || $scope.password != '123456') {
			$scope.result = 'You are not authenticated or your session expired. Please login.';
		} else {
			$scope.result = 'Login Success';
		}
	};
	$scope.locations = [
		'Select Location',
		'Registration Desk',
		'OPD-1',
		'General Ward',
		'Labour Ward'
	];
	$scope.languages = [
		'en','es','fr','it','pt'
	];
	$scope.usernamePlaceholder = 'Enter your username';
	$scope.passwordPlaceholder = 'Enter your password';
	$scope.currentLocation = 'Registration Desk';
});
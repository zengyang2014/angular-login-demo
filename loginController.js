var app = angular.module('loginModule', []);

app.controller('loginCtrl', ($scope) => {
	$scope.loginHandler = () => {

		console.log($scope.username);
		console.log($scope.password);

		if ($scope.username == 'admin' && $scope.password == '123456') {
			$scope.result = 'Login Success';
		} else {
			$scope.result = 'You are not authenticated or your session expired. Please login.';
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
});
var app = angular.module('loginModule', []);

var initUsername = 'admin';
var initPassword = '123456';

var locationSel = [
	'Select Location',
	'Registraction Desk',
	'OPD-1',
	'General Ward',
	'Labour Ward'
];

var languagesSel = [
	'en','es','fr','it','pt'
];

app.controller('loginCtrl', ($scope) => {
	$scope.loginHandler = () => {
		if ($scope.username == initUsername && $scope.password == initPassword) {
			$scope.result = 'Login Success';
		} else {
			$scope.result = 'You are not authenticated or your session expired. Please login.';
		}
	}
	$scope.locations = locationSel;
	$scope.languages = languagesSel;
});
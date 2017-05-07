// var angular = require('angular');
// var uirouter = require('angular-ui-router');
//
// module.exports = angular;

angular
	.module ('app', [
		'ui.router'
	])
	.config(['$urlRouterProvider', '$stateProvider', '$locationProvider', function ($urlRouterProvider, $stateProvider, $locationProvider){
		$urlRouterProvider.otherwise ('/');
	//	$locationProvider.html5Mode(true);

		$stateProvider
			.state ('home', {
				url : '/',
				templateUrl : 'templates/gallery.html',
				controller : 'galleryCtrl'
			})
			.state ('about', {
				url : '/about',
				templateUrl : 'templates/about.html',
				controller : 'aboutCtrl'
			})
			.state ('stories', {
				url : '/stories',
				templateUrl : 'templates/stories.html',
				controller : 'storiesCtrl'
			})
			.state ('rajasthan', {
				url : '/rajasthan',
				templateUrl : 'templates/gallery.html',
				controller : 'galleryCtrl'
			})
			.state ('dilli', {
				url : '/dilli',
				templateUrl : 'templates/gallery.html',
				controller : 'galleryCtrl'
			})

	}]) //config


// require('./controllers/aboutCtrl');
// require('./controllers/galleryCtrl');
// require('./controllers/storiesCtrl');
// require('./services/Gallery');

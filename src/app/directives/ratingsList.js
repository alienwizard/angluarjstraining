import angular from 'angular';

function ratingsList() {
	return {
		restrict: 'E',
		scope:{
			name:'='
		},
		template: '<h1>Ratings, {{name}} </h1>'
	}
}

export default angular.module('directives.ratingsList', [])
	.directive('ratingsList', ratingsList)
	.name;
var myApp = angular.module("myApp", ["ngRoute", "ngAnimate"]);

myApp.config(function($routeProvider) {
	$routeProvider
		.when("/skills", {
			templateUrl: "partials/skill-list.html",
			controller: "BookListCtrl"
		})
        .when("/about", {
            templateUrl: "partials/about.html",
            controller: "aboutCtrl"
        })
        .when("/exp", {
            templateUrl: "partials/exp.html",
            controller: "expCtrl"
        })
        .when("/proj", {
            templateUrl: "partials/proj.html",
            controller: "projCtrl"
        })
        .when("/conn", {
            templateUrl: "partials/conn.html",
            controller: "connCtrl"
        })
        .when("/acad", {
            templateUrl: "partials/acad.html",
            controller: "acadCtrl"
        })
	.otherwise({
		redirectTo: "/about"
	});
});



myApp.factory("bookService", function() {
	var books = [
		{

			name: "Java",
			rating: 90,
			//content: "Content Goes Here"
		},
        {

            name: "SQL",
            rating: 90,
           // content: "Content"
        },
    {

		name: "HTML5, CSS3, Java Script, JQuery, Bootstrap, Ajax",
        rating: 80,
        //content: "Content"
    },
        {

            name: "Spring Boot, Spring MVC, Hibernate",
            rating: 90,
           // content: "Content"
        },
        {

            name: "Unix, Linux, Oracle, Sql server, Tomcat, JBoss",
            rating: 80,
           // content: "Content"
        },
        {

            name: "Hadoop, Spark, Pig, Hive, Tableau",
            rating: 75,
            //content: "Content"
        },
        {

            name: "AWS, Google App Engine, Docker",
            rating: 75,
            // content: "Content"
        },
        


	];
	
	return {
		getBooks: function() {
			return books;
		},

	}
});



myApp.controller("HeaderCtrl", function($scope, $location) {
	$scope.appDetails = {};
	$scope.appDetails.title = "Madhu Babu Anchuri";
	$scope.appDetails.tagline = "Software Developer";
	
	$scope.nav = {};
	$scope.nav.isActive = function(path) {
		if (path === $location.path()) {
			return true;
		}
		
		return false;
	}
});

myApp.controller("BookListCtrl", function($scope, bookService) {
	$scope.books = bookService.getBooks();
	

});
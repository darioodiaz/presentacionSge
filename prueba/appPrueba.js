var miModulo = angular.module("appDePrueba", []);

miModulo.controller("PrimerCtrl", function($scope) {
	$scope.titulo = "Titulo del Primer Ctrl";
});

miModulo.controller("HijoCtrl", function() {
	
});

miModulo.controller("SegundoCtrl", function($scope) {
	$scope.titulo = "Otro titulo :)";
});
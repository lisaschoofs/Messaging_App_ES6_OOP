myApp.controller('DashboardController', ['$scope', 'DashboardService', function($scope,DashboardService){
  console.log('controller loaded!');

  $scope.templates = DashboardService.newTemplates.data;
  console.log('logging scope.templates', $scope.templates);


}]);

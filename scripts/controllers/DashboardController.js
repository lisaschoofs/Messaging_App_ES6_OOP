myApp.controller('DashboardController', ['$scope', 'DashboardService', function($scope,DashboardService){
  //functions/variables made available from DashboardService
  $scope.updateMessage = DashboardService.updateMessage;
  $scope.sendMessage = DashboardService.sendMessage;
  $scope.greeting = DashboardService.greeting.data;

  //Guest, company, and template data to display on DOM
  $scope.guests = GUESTS;
  $scope.companies = COMPANIES;
  $scope.templates = MESSAGE_TEMPLATES;

  //variables to be updated with user selections
  $scope.message = {};
  $scope.chosenGuest = {};
  $scope.chosenCompany = {};
  $scope.chosenGuest = {};

//CURRENTLY CALLS ON SUBMIT OF FORM
  $scope.createMessage = function(message) {
    $scope.message = message;
    console.log('new message ', message);
  };

}]);

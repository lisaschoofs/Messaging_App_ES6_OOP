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
  $scope.chosenGuest = {};
  $scope.chosenCompany = {};
  $scope.chosenGuest = {};

  /*functions to update selection variables - a bit verbose right now,
  but allows user to see console logs with each click*/
  $scope.selectGuest = function(guest) {
    $scope.chosenGuest = guest;
    console.log('selected Guest: ', $scope.chosenGuest);
  };

  $scope.selectCompany = function(company) {
    $scope.chosenCompany = company;
    console.log('selected Company: ', $scope.chosenCompany);
  };

  $scope.selectTemplate = function(template) {
    $scope.chosenTemplate = template;
    console.log('selected Template: ', $scope.chosenTemplate);
  };

}]);

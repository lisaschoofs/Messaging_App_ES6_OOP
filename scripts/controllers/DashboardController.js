myApp.controller('DashboardController', ['$scope', 'DashboardService', function($scope,DashboardService){
  var dashboardController = this;
  $scope.messageInstance = DashboardService.messageInstance;

  //functions/variables made available from DashboardService
  $scope.updateMessage = DashboardService.updateMessage;
  $scope.sendMessage = DashboardService.sendMessage;
  $scope.greeting = DashboardService.greeting.data;
  //message object to be updated with user selections
  $scope.message = DashboardService.message;

  //Guest, company, and template data to display on DOM
  $scope.guests = GUESTS;
  $scope.companies = COMPANIES;
  $scope.templates = MESSAGE_TEMPLATES;

  //boolean to inform view of a sent message
  $scope.sent = false;

  //On submit of form...
  $scope.createMessage = function(message) {
    $scope.message = message;
    console.log('new message ', message);
    $scope.sendMessage(message, $scope.greeting);
    $scope.sent = true;
    console.log('sent?', $scope.sent);
  };

}]);

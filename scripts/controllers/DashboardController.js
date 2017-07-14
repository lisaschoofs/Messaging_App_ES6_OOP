myApp.controller('DashboardController', ['$scope', 'DashboardService', function($scope,DashboardService){
  //functions/variables made available from DashboardService
  $scope.updateMessage = DashboardService.updateMessage;
  $scope.sendMessage = DashboardService.sendMessage;
  $scope.greeting = DashboardService.greeting.data;
  $scope.message = DashboardService.message;

  //Guest, company, and template data to display on DOM
  $scope.guests = GUESTS;
  $scope.companies = COMPANIES;
  $scope.templates = MESSAGE_TEMPLATES;

  //message object to be updated with user selections
  $scope.sent = false;

  //CURRENTLY CALLS ON SUBMIT OF FORM
  $scope.createMessage = function(message) {
    $scope.message = message;
    console.log('new message ', message);
    $scope.sendMessage(message, $scope.greeting);
    $scope.sent = true;
    console.log('sent?', $scope.sent);
    alert('message has been sent!');
  };

}]);

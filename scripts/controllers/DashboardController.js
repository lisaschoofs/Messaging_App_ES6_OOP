myApp.controller('DashboardController', ['$scope', 'DashboardService', function($scope,DashboardService){

  $scope.guests = GUESTS;
  $scope.companies = COMPANIES;
  $scope.templates = MESSAGE_TEMPLATES;
  $scope.chosenGuest = {};
  $scope.chosenCompany = {};
  $scope.chosenGuest = {};

  $scope.selectGuest = function(guest) {
    $scope.chosenGuest = guest;
    console.log('selectedGuest', $scope.chosenGuest);
  };

  $scope.selectCompany = function(company) {
    $scope.chosenCompany = company;
    console.log('selectCompany', $scope.chosenCompany);
  };

  $scope.selectTemplate = function(template) {
    $scope.chosenTemplate = template;
    console.log('selectedTemplate', $scope.chosenTemplate);
  };


  //GRABS CURRENT TIME TO INFORM GREETING VARIABLE
    let date = new Date();
    let time = date.getHours();
    console.log('logging time: ', time);

  //Variables to inform when each type of greeting should be used
    let morningGreetingMax = 12;
    let afternoonGreetingMin = 12;
    let afternoonGreetingMax = 17;
    let eveningGreetingMin = 17;
    $scope.greeting;

  //function to set the greeting variable according to the current time of day.
    function checkTime() {
      if(time < morningGreetingMax) {
        $scope.greeting = 'Good Morning';
      } else if (time > afternoonGreetingMin && time < afternoonGreetingMax) {
        $scope.greeting = 'Good Afternoon';
      } else if (time > eveningGreetingMin) {
        $scope.greeting = 'Good Evening';
      }
      return $scope.greeting;
    };

    console.log(checkTime());


  function updateMessage(guestObject, companyObject, message, greeting) {
    let newMessage = message.replace(/greeting/i, greeting);
    let newerMessage = newMessage.replace(/firstName/i, guestObject.firstName);
    let newestMessage = newerMessage.replace(/company/i, companyObject.company);
    let finalMessage = newestMessage.replace(/roomNumber/i,
                       guestObject.reservation.roomNumber);
    return finalMessage;
  };

  $scope.sendMessage = function(guestObject, companyObject, message, greeting){
    var updatedMessage = updateMessage(guestObject, companyObject, message, greeting);
    $scope.test = updatedMessage;
    console.log('log updatedMessage', updatedMessage);
    return updatedMessage;
  };

}]);

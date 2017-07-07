myApp.factory('DashboardService', [function(){

//GRABS CURRENT TIME TO INFORM GREETING VARIABLE
  let date = new Date();
  let time = date.getHours();
  console.log('logging time: ', time);

//Variables to inform when each type of greeting should be used
  let morningGreetingMax = 12;
  let afternoonGreetingMin = 12;
  let afternoonGreetingMax = 17;
  let eveningGreetingMin = 17;
  let greeting;

//function to set the greeting variable according to the current time of day.
  function checkTime() {
    if(time < morningGreetingMax) {
      greeting = 'Good Morning';
    } else if (time > afternoonGreetingMin && time < afternoonGreetingMax) {
      greeting = 'Good Afternoon';
    } else if (time > eveningGreetingMin) {
      greeting = 'Good Evening';
    }
    return greeting;
  };

  console.log(checkTime());
  console.log('greeting: ', greeting);
//

  return {

  }

}]);

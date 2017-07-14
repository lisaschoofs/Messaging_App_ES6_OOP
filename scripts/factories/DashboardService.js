myApp.factory('DashboardService', [function(){

  /* function that takes in a selected guest object, company object, current greeting,
  and template string and fills in the variables in template. Returns updated message. */
  //NEED TO UPDATE FOR NEW FORM
  function updateMessage(message, greeting) {
    let newMessage = message.template.message.replace(/greeting/i, greeting);
    let newerMessage = newMessage.replace(/firstName/i, message.guest.firstName);
    let newestMessage = newerMessage.replace(/company/i, message.company.company);
    let finalMessage = newestMessage.replace(/roomNumber/i,
                       message.guest.reservation.roomNumber);
    return finalMessage;
  };

  /* function that takes variable selections from user, and sends message to
  guest. Can be updated later with additional functionality to actually send! */
  //NEED TO UPDATE FOR NEW FORM
  function sendMessage(message, greeting){
    let updatedMessage = updateMessage(message, greeting);
    console.log('logging message to send: ', updatedMessage);
    return updatedMessage;
  };


/*      GREETING FUNCTIONALITY     */

  let greeting = {};

//Grabs the current time to inform greeting
  let date = new Date();
  let time = date.getHours();

//Variables to inform when each type of greeting should be used - hour by military time
  let morningGreetingMax = 12;
  let afternoonGreetingMin = 12;
  let afternoonGreetingMax = 17;
  let eveningGreetingMin = 17;

//Function to set the greeting variable according to the current time of day.
  function checkTime() {
    if(time < morningGreetingMax) {
      greeting.data = 'Good Morning';
    } else if (time > afternoonGreetingMin && time < afternoonGreetingMax) {
      greeting.data = 'Good Afternoon';
    } else if (time > eveningGreetingMin) {
      greeting.data = 'Good Evening';
    } else {
      greeting.data = 'Hello';
    }
    console.log('logging current greeting: ', greeting.data);
    return greeting;
  };

  checkTime();

  return {
    updateMessage: updateMessage,
    sendMessage: sendMessage,
    greeting: greeting
  }

}]);

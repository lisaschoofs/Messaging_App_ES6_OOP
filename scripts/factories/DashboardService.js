myApp.factory('DashboardService', [function(){

  let newTemplates = {
    data: []
    }

  changeTemplates(MESSAGE_TEMPLATES);

/*takes in each template and replaces each variable, currently with a hard-coded
value. Eventually will bring in the appropriate company, guest, etc. */
  function changeTemplates(templates) {
    for(var i = 0; i < templates.length; i++){
      let newTemplate = templates[i].message.replace(/greeting/i, 'HI THERE');
      let newerTemplate = newTemplate.replace(/firstName/i, 'Lisa');
      let newestTemplate = newerTemplate.replace(/company/i, 'The Hilton');
      let lastTemplate = newestTemplate.replace(/roomNumber/i, 'Room 123');
      newTemplates.data.push(lastTemplate);
    }
  }

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
    newTemplates
  }

}]);

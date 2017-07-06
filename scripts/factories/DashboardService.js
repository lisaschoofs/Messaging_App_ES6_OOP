myApp.factory('DashboardService', [function(){
  console.log('DashboardService loaded!');
  console.log('logging guests', GUESTS);
  console.log('logging companies', COMPANIES);
  console.log('logging MESSAGE_TEMPLATES', MESSAGE_TEMPLATES);

  let newTemplates = {
    data: []
    }

  console.log('logging MESSAGE_TEMPLATES pre function', MESSAGE_TEMPLATES);
  changeTemplates(MESSAGE_TEMPLATES);
  console.log('logging new templates', newTemplates);


  function changeTemplates(templates) {
    for(var i = 0; i < templates.length; i++){
      var currentTemplate = templates[i];
      console.log('currentTemplate: ', currentTemplate);
      console.log('logging templates in loop', templates);
      console.log('logging templates[i] in function', templates[i]);
      console.log('logging templates.length', templates.length);
      let newTemplate = currentTemplate.message.replace(/greeting/i, 'HI THERE');
      let newerTemplate = newTemplate.replace(/firstName/i, 'Lisa');
      let newestTemplate = newerTemplate.replace(/company/i, 'The Hilton');
      let lastTemplate = newestTemplate.replace(/roomNumber/i, 'Room 123');
      newTemplates.data.push(lastTemplate);
    }
  }

  return {
    newTemplates
  }

}]);

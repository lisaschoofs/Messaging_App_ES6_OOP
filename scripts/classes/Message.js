class Message{
  constructor(){

  }

  /* function that takes in a selected guest object, company object, and message
  template string and updates the template accordingly. Returns updated message. */
  updateMessage(guestObject, companyObject, message, greeting) {
    let newMessage = message.replace(/greeting/i, greeting);
    let newerMessage = newMessage.replace(/firstName/i, guestObject.firstName);
    let newestMessage = newerMessage.replace(/company/i, companyObject.company);
    let finalMessage = newestMessage.replace(/roomNumber/i,
                       guestObject.reservation.roomNumber);
    return finalMessage;
  };

}
